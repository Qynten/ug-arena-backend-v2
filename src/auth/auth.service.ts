import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async loginWithDiscord(code: string) {
    try {
      console.log('Attempting Discord exchange with code:', code);

      const params = new URLSearchParams({
        client_id: this.configService.get<string>('DISCORD_CLIENT_ID')!,
        client_secret: this.configService.get<string>('DISCORD_CLIENT_SECRET')!,
        grant_type: 'authorization_code',
        code,
        redirect_uri: this.configService.get<string>('DISCORD_REDIRECT_URI')!,
      });

      console.log('--- CREDENTIAL CHECK ---');
      console.log('Client ID:', this.configService.get<string>('DISCORD_CLIENT_ID'));
      console.log('Secret exists?', !!this.configService.get<string>('DISCORD_CLIENT_SECRET'));
      console.log('------------------------');
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

      const userData = await userResponse.json();
      const { id: discordId, email, username, avatar } = userData;

      if (!email) {
        throw new UnauthorizedException('Email not provided by Discord');
      }

      // 3. Find or create user
      let user = await this.usersService.findByEmail(email);
      if (!user) {
        user = await this.usersService.create({
          email,
          name: username,
          photo: avatar ? `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png` : undefined,
          provider: 'DISCORD',
          providerAccountId: discordId,
        });
      }

      if (!user) {
        throw new UnauthorizedException('User could not be created');
      }

      // 4. Generate tokens
      const tokens = await this.generateTokens(user.id, user.email, user.roles);

      // 5. Update refresh token hash
      await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);

      return {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
        },
        ...tokens,
      };
    } catch (error: any) {
      console.error('Discord Auth Error:', error.message);
      throw new UnauthorizedException('Failed to authenticate with Discord');
    }
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedException('Access Denied');
    }

    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.refreshTokenHash,
    );
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
