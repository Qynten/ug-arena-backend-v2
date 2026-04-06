import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {
    this.logger.log('AuthService initialized');
  }

  async loginWithDiscord(code: string) {
    try {
      this.logger.log(`Attempting Discord exchange with code: ${code}`);

      const params = new URLSearchParams({
        client_id: this.configService.get<string>('DISCORD_CLIENT_ID')!,
        client_secret: this.configService.get<string>('DISCORD_CLIENT_SECRET')!,
        grant_type: 'authorization_code',
        code,
        redirect_uri: this.configService.get<string>('DISCORD_REDIRECT_URI')!,
      });

      // 1. Exchange code for access token using native fetch
      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'UndergroundArena (http://localhost, 1.0.0)', // Required by Discord
        },
        body: params.toString(),
      });

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        throw new Error(`Token Exchange Failed: ${tokenResponse.status} - ${errorText}`);
      }

      const tokenData = await tokenResponse.json();
      const discordAccessToken = tokenData.access_token;

      // 2. Get user profile using native fetch
      const userResponse = await fetch('https://discord.com/api/users/@me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${discordAccessToken}`,
          'User-Agent': 'UndergroundArena (http://localhost, 1.0.0)',
        },
      });

      if (!userResponse.ok) {
        const errorText = await userResponse.text();
        throw new Error(`Profile Fetch Failed: ${userResponse.status} - ${errorText}`);
      }

      // 3. Extract Discord Scopes
      const userData = await userResponse.json();
      const { id: discordId, email, username, global_name, avatar } = userData;

      if (!email) {
        throw new UnauthorizedException('Email not provided by Discord');
      }

      // 4. Upsert user to prevent race conditions
      const user = await this.usersService.upsertByEmail({
        email,
        displayName: global_name || username,
        discordName: username,
        photo: avatar ? `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png` : undefined,
        provider: 'DISCORD',
        providerAccountId: discordId,
      });

      if (!user) {
        throw new UnauthorizedException('User could not be created or updated');
      }

      // 5. Generate tokens
      const tokens = await this.generateTokens(user.id, user.email, user.roles);

      // 6. Update refresh token hash
      await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

      // 7. Return the full payload with the new schema variables
      return {
        user: {
          id: user.id,
          email: user.email,
          displayName: user.displayName || global_name || username,
          discordName: user.discordName || username,
          photo:
            user.photo ||
            (avatar ? `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png` : null),
          roles: user.roles,
        },
        ...tokens,
      };
    } catch (error: any) {
      this.logger.error(`Discord Auth Error: ${error.message}`);
      throw new UnauthorizedException('Failed to authenticate with Discord');
    }
  }

  async refreshTokens(userId: string, refreshToken: string) {
    // 1. Verify the JWT signature and expiry first (Stateless Check)
    try {
      await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });
    } catch (e) {
      throw new UnauthorizedException('Refresh token expired or invalid');
    }

    // 2. Database Lookup
    const user = await this.usersService.findById(userId);
    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedException('Access Denied');
    }

    // 3. Hash Comparison (Stateful Check for Rotation)
    const refreshTokenMatches = await bcrypt.compare(refreshToken, user.refreshTokenHash);
    if (!refreshTokenMatches) {
      throw new UnauthorizedException('Access Denied');
    }

    const tokens = await this.generateTokens(user.id, user.email, user.roles);
    await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: string) {
    await this.usersService.updateRefreshToken(userId, null);
  }

  private async generateTokens(userId: string, email: string, roles: string[]) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email, roles },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: (this.configService.get<string>('JWT_ACCESS_EXPIRATION') || '15m') as any,
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, email, roles },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: (this.configService.get<string>('JWT_REFRESH_EXPIRATION') || '7d') as any,
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
