import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDiscordDto } from './dto/login-discord.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('discord/login')
  async loginWithDiscord(@Body() loginDiscordDto: LoginDiscordDto) {
    return this.authService.loginWithDiscord(loginDiscordDto.code);
  }

  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string, @Body('userId') userId: string) {
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@GetUser('id') userId: string) {
    await this.authService.logout(userId);
    return { message: 'Logged out successfully' };
  }
}
