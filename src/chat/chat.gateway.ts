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
import { ChatService } from './chat.service';
import { WsJwtGuard } from '../common/guards/ws-jwt.guard';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log(`[ChatGateway] Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`[ChatGateway] Client disconnected: ${client.id}`);
  }

  // ── Join tournament chat room ─────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinTournamentChat')
  async handleJoin(
    @MessageBody('tournamentId') tournamentId: string,
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;
    try {
      const access = await this.chatService.verifyAccess(user.id, tournamentId);
      if (!access.canAccess) {
        return { status: 'error', message: 'Tournament not found' };
      }

      client.join(tournamentId);

      // Send recent message history to the joining client
      const history = await this.chatService.getMessages(tournamentId);
      client.emit('chatHistory', {
        messages: history.messages,
        nextCursor: history.nextCursor,
        canWrite: access.canWrite,
        isStaff: access.isStaff,
      });

      return { status: 'success', canWrite: access.canWrite, isStaff: access.isStaff };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  // ── Leave tournament chat room ────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('leaveTournamentChat')
  handleLeave(
    @MessageBody('tournamentId') tournamentId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.leave(tournamentId);
    return { status: 'success' };
  }

  // ── Send a normal chat message ────────────────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendChatMessage')
  async handleSendMessage(
    @MessageBody() payload: { tournamentId: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;
    try {
      const access = await this.chatService.verifyAccess(user.id, payload.tournamentId);
      if (!access.canWrite) {
        return { status: 'error', message: 'You must be a participant to send messages' };
      }

      const message = await this.chatService.createMessage(
        payload.tournamentId,
        user.id,
        payload.content.trim(),
      );

      this.server.to(payload.tournamentId).emit('newChatMessage', message);
      return { status: 'success', data: message };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  // ── Send an admin call (escalated message with notification) ──────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('sendAdminCall')
  async handleAdminCall(
    @MessageBody() payload: { tournamentId: string; issueType: string; content?: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;
    try {
      const access = await this.chatService.verifyAccess(user.id, payload.tournamentId);
      if (!access.canWrite) {
        return { status: 'error', message: 'You must be a participant to call admin' };
      }

      const messageContent = payload.content?.trim() || `[Admin Call] ${payload.issueType}`;

      const message = await this.chatService.createMessage(
        payload.tournamentId,
        user.id,
        messageContent,
        'ADMIN_CALL' as any,
        payload.issueType,
      );

      // Broadcast to all room members (admins, participants, etc.)
      this.server.to(payload.tournamentId).emit('newChatMessage', message);

      // Dispatch push notifications to staff
      const senderName =
        (message as any).sender?.displayName ||
        (message as any).sender?.discordName ||
        'A participant';

      await this.chatService.notifyStaffAdminCall(
        payload.tournamentId,
        senderName,
        payload.issueType,
        message.id,
      );

      return { status: 'success', data: message };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  // ── Delete a message (staff/admin only) ───────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('deleteChatMessage')
  async handleDeleteMessage(
    @MessageBody() payload: { tournamentId: string; messageId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = (client as any).user;
    try {
      const access = await this.chatService.verifyAccess(user.id, payload.tournamentId);
      if (!access.isStaff) {
        return { status: 'error', message: 'Only staff and admins can delete messages' };
      }

      await this.chatService.deleteMessage(payload.messageId, user.id);

      // Notify all room members so they can hide the message in real time
      this.server
        .to(payload.tournamentId)
        .emit('chatMessageDeleted', { messageId: payload.messageId });

      return { status: 'success' };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }

  // ── Load older messages (infinite scroll) ────────────────────────────────────
  @UseGuards(WsJwtGuard)
  @SubscribeMessage('loadMoreMessages')
  async handleLoadMore(
    @MessageBody() payload: { tournamentId: string; cursor: string },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = await this.chatService.getMessages(payload.tournamentId, payload.cursor);
      client.emit('olderMessages', result);
      return { status: 'success' };
    } catch (error: any) {
      return { status: 'error', message: error.message };
    }
  }
}
