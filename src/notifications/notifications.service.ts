import { Injectable, NotFoundException, ForbiddenException, Inject, forwardRef } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsGateway } from './notifications.gateway';

@Injectable()
export class NotificationsService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => NotificationsGateway))
    private gateway: NotificationsGateway,
  ) {}

  async getMyNotifications(userId: string, pageStr?: string, limitStr?: string) {
    const page = parseInt(pageStr || '1', 10);
    const limit = parseInt(limitStr || '100', 10);
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.notification.count({ where: { userId } }),
    ]);

    return { data, meta: { total, page, limit } };
  }

  async getUnreadCount(userId: string) {
    const count = await this.prisma.notification.count({
      where: { userId, isRead: false },
    });
    return { count };
  }

  /**
   * Centralized method to create a notification and emit real-time event
   */
  async create(data: { userId: string; type: string; title: string; message: string; payload?: any }) {
    const notification = await this.prisma.notification.create({
      data: {
        userId: data.userId,
        type: data.type,
        title: data.title,
        message: data.message,
        payload: data.payload || {},
      },
    });

    // Emit real-time event to user's private room
    this.gateway.emitToUser(data.userId, notification);

    return notification;
  }

  /**
   * Centralized method to create multiple notifications and emit real-time events
   */
  async createMany(notificationsData: Array<{ userId: string; type: string; title: string; message: string; payload?: any }>) {
    // Prisma createMany doesn't return the created objects with IDs on all DBs,
    // so we iterate or perform a fetch. For simplicity and reliability in emissions:
    const created = await Promise.all(
      notificationsData.map(d => this.create(d))
    );
    return created;
  }

  async markRead(notificationId: string, userId: string) {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) throw new NotFoundException('Notification not found.');
    if (notification.userId !== userId)
      throw new ForbiddenException("Cannot mark another user's notification as read.");

    return this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });
  }

  async markAllRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });
  }
}
