import { Controller, Get, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  /**
   * GET /chat/:tournamentId/admin-calls
   * Returns all unresolved admin calls for the tournament admin hub.
   */
  @Get(':tournamentId/admin-calls')
  @UseGuards(JwtAuthGuard)
  getAdminCalls(@Param('tournamentId') tournamentId: string) {
    return this.chatService.getAdminCalls(tournamentId);
  }

  /**
   * PATCH /chat/:tournamentId/admin-calls/:messageId/resolve
   * Resolves an admin call with a response from a staff member.
   */
  @Patch(':tournamentId/admin-calls/:messageId/resolve')
  @UseGuards(JwtAuthGuard)
  resolveAdminCall(
    @Param('tournamentId') tournamentId: string,
    @Param('messageId') messageId: string,
    @Body('response') response: string,
    @GetUser('id') resolvedById: string,
  ) {
    return this.chatService.resolveAdminCall(tournamentId, messageId, resolvedById, response);
  }
}
