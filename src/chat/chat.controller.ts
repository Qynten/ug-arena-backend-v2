import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

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
}
