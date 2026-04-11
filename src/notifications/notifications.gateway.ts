import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { WsJwtGuard } from '../common/guards/ws-jwt.guard';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class NotificationsGateway {
  @WebSocketServer()
  server!: Server;

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('subscribeNotifications')
  handleSubscribe(@ConnectedSocket() client: Socket) {
    const user = (client as any).user;
    if (user && user.id) {
      const room = `user_${user.id}`;
      client.join(room);
      console.log(`[NotificationsGateway] User ${user.id} joined room ${room}`);
      return { status: 'success', room };
    }
    return { status: 'error', message: 'User context not found' };
  }

  /**
   * Internal helper to emit notification to a specific user
   */
  emitToUser(userId: string, notification: any) {
    const room = `user_${userId}`;
    this.server.to(room).emit('newNotification', notification);
  }
}
