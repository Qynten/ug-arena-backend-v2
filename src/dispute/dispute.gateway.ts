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
  @SubscribeMessage('joinMatchRoom')
  async handleJoinRoom(@MessageBody('matchId') matchId: string, @ConnectedSocket() client: Socket) {
    const user = (client as any).user;

    try {
      const canAccess = await this.disputeService.verifyUserCanAccessMatch(user.id, matchId);
      if (canAccess) {
        client.join(matchId);
        return { status: 'success', message: 'Joined room successfully' };
      } else {
        return { status: 'error', message: 'Forbidden' };
      }
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendMatchMessage')
  async handleSendMessage(
    @MessageBody() payload: { matchId: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;

    try {
      const message = await this.disputeService.createMatchMessage(
        payload.matchId,
        user.id,
        payload.content,
      );

      // Broadcast to the room
      this.server.to(payload.matchId).emit('newMatchMessage', message);

      return { status: 'success', data: message };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinTeamRoom')
  async handleJoinTeamRoom(
    @MessageBody('teamId') teamId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;

    try {
      const canAccess = await this.disputeService.verifyUserCanAccessTeam(user.id, teamId);
      if (canAccess) {
        client.join(`team_${teamId}`);
        return { status: 'success', message: 'Joined team room successfully' };
      } else {
        return { status: 'error', message: 'Forbidden' };
      }
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendTeamMessage')
  async handleSendTeamMessage(
    @MessageBody() payload: { teamId: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;

    try {
      const message = await this.disputeService.createTeamMessage(
        payload.teamId,
        user.id,
        payload.content,
      );

      // Broadcast to the room
      this.server.to(`team_${payload.teamId}`).emit('newTeamMessage', message);

      return { status: 'success', data: message };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('broadcastVoteUpdate')
  async handleVoteUpdate(
    @MessageBody()
    payload: {
      teamId: string;
      action: string;
      type: string;
      targetId: string;
      voterId: string;
      executedFor: string | null;
    },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;

    try {
      const canAccess = await this.disputeService.verifyUserCanAccessTeam(user.id, payload.teamId);
      if (canAccess) {
        // Broadcast to the room (and also the sender, so they sync cleanly if we wanted client update, but here we emit to all, wait emit to all is `this.server.to` and `client.to` is all EXCEPT sender. Let's send to all so sender UI updates from socket instead of complex local state, but the sender could do it itself too. Better to broadcast to ALL `this.server.to` to ensure everyone executes the same code path.)
        this.server.to(`team_${payload.teamId}`).emit('teamVoteUpdate', payload);
        return { status: 'success' };
      } else {
        return { status: 'error', message: 'Forbidden' };
      }
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }
}
