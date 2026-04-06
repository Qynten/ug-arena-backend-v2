import { UseGuards } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DisputeService } from './dispute.service';
import { WsJwtGuard } from '../common/guards/ws-jwt.guard';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class DisputeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  constructor(private readonly disputeService: DisputeService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinDisputeRoom')
  async handleJoinRoom(
    @MessageBody('disputeId') disputeId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;

    try {
      const canAccess = await this.disputeService.verifyUserCanAccessDispute(user.id, disputeId);
      if (canAccess) {
        client.join(disputeId);
        return { status: 'success', message: 'Joined room successfully' };
      } else {
        return { status: 'error', message: 'Forbidden' };
      }
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendDisputeMessage')
  async handleSendMessage(
    @MessageBody() payload: { disputeId: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;

    try {
      const message = await this.disputeService.createDisputeMessage(
        payload.disputeId,
        user.id,
        payload.content,
      );

      // Broadcast to the room
      this.server.to(payload.disputeId).emit('newDisputeMessage', message);

      return { status: 'success', data: message };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }
}
