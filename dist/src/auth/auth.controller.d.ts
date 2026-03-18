import { AuthService } from './auth.service';
import { LoginDiscordDto } from './dto/login-discord.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginWithDiscord(loginDiscordDto: LoginDiscordDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            name: string | null;
            roles: import(".prisma/client").$Enums.UserRole[];
        };
    }>;
    refresh(refreshToken: string, userId: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
}
