import { Controller, Get, Patch, Param, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMyNotifications(@GetUser('id') userId: string) {
    return this.notificationsService.getMyNotifications(userId);
  }

  @Get('me/unread-count')
  @UseGuards(JwtAuthGuard)
  getUnreadCount(@GetUser('id') userId: string) {
    return this.notificationsService.getUnreadCount(userId);
  }

  @Patch(':id/read')
  @UseGuards(JwtAuthGuard)
  markRead(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.notificationsService.markRead(id, userId);
  }

  @Patch('me/read-all')
  @UseGuards(JwtAuthGuard)
  markAllRead(@GetUser('id') userId: string) {
    return this.notificationsService.markAllRead(userId);
  }
}
