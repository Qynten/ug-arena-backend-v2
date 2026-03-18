import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private configService;
    private jwtService;
    private usersService;
    private readonly logger;
    constructor(configService: ConfigService, jwtService: JwtService, usersService: UsersService);
    loginWithDiscord(code: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            name: string | null;
            roles: import(".prisma/client").$Enums.UserRole[];
        };
    }>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<void>;
    private generateTokens;
}
