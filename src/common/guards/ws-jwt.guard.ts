import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: Socket = context.switchToWs().getClient();
    const token = this.extractToken(client);

    if (!token) {
      throw new UnauthorizedException('Authentication token missing');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      });

      // Attach the user to the socket for later access in the gateway
      (client as any).user = {
        id: payload.sub,
        email: payload.email,
        roles: payload.roles,
      };

      return true;
    } catch {
      throw new UnauthorizedException('Invalid authentication token');
    }
  }

  /**
   * Browsers cannot send custom HTTP headers over a native WebSocket connection.
   * Socket.io v4's `auth` object is sent as part of the socket.io handshake payload
   * and works in all transports. We check it first, then fall back to the
   * Authorization header (works when HTTP polling is used).
   */
  private extractToken(client: Socket): string | undefined {
    // 1. socket.io v4 auth object — browser-compatible, preferred approach
    const authToken = (client.handshake.auth as any)?.token;
    if (authToken) return authToken;

    // 2. Authorization header fallback — works with HTTP polling transport
    const authorization = client.handshake.headers.authorization;
    if (!authorization) return undefined;
    const [type, token] = authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
