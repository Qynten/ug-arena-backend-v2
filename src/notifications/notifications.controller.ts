import { Controller, Get, Patch, Param, UseGuards, Query, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMyNotifications(
    @GetUser('id') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.notificationsService.getMyNotifications(userId, page, limit);
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

  @Delete('me/all')
  @UseGuards(JwtAuthGuard)
  deleteAll(@GetUser('id') userId: string) {
    return this.notificationsService.deleteAll(userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.notificationsService.delete(id, userId);
  }
}
