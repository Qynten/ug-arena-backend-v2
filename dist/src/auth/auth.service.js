"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = AuthService_1 = class AuthService {
    configService;
    jwtService;
    usersService;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(configService, jwtService, usersService) {
        this.configService = configService;
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.logger.log('AuthService initialized');
    }
    async loginWithDiscord(code) {
        try {
            this.logger.log(`Attempting Discord exchange with code: ${code}`);
            const params = new URLSearchParams({
                client_id: this.configService.get('DISCORD_CLIENT_ID'),
                client_secret: this.configService.get('DISCORD_CLIENT_SECRET'),
                grant_type: 'authorization_code',
                code,
                redirect_uri: this.configService.get('DISCORD_REDIRECT_URI'),
            });
            this.logger.log('--- CREDENTIAL CHECK ---');
            this.logger.log(`Client ID: ${this.configService.get('DISCORD_CLIENT_ID')}`);
            this.logger.log(`Secret exists? ${!!this.configService.get('DISCORD_CLIENT_SECRET')}`);
            this.logger.log('------------------------');
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
                throw new common_1.UnauthorizedException('Email not provided by Discord');
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
                throw new common_1.UnauthorizedException('User could not be created');
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
        }
        catch (error) {
            this.logger.error(`Discord Auth Error: ${error.message}`);
            throw new common_1.UnauthorizedException('Failed to authenticate with Discord');
        }
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshTokenHash) {
            throw new common_1.UnauthorizedException('Access Denied');
        }
        const refreshTokenMatches = await bcrypt.compare(refreshToken, user.refreshTokenHash);
        if (!refreshTokenMatches) {
            throw new common_1.UnauthorizedException('Access Denied');
        }
        const tokens = await this.generateTokens(user.id, user.email, user.roles);
        await this.usersService.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async logout(userId) {
        await this.usersService.updateRefreshToken(userId, null);
    }
    async generateTokens(userId, email, roles) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({ sub: userId, email, roles }, {
                secret: this.configService.get('JWT_ACCESS_SECRET'),
                expiresIn: (this.configService.get('JWT_ACCESS_EXPIRATION') || '15m'),
            }),
            this.jwtService.signAsync({ sub: userId, email, roles }, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: (this.configService.get('JWT_REFRESH_EXPIRATION') || '7d'),
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map