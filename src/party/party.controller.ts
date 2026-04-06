import { Controller, Post, Get, Body, Param, Req, UseGuards, Delete } from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { InvitePlayerDto } from './dto/invite-player.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CommonStatus } from '@prisma/client';

@Controller('parties')
@UseGuards(JwtAuthGuard)
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Post()
  createParty(@Req() req: any, @Body() dto: CreatePartyDto) {
    return this.partyService.createParty(req.user.id, dto);
  }

  @Get('my')
  getMyParty(@Req() req: any) {
    return this.partyService.getMyParty(req.user.id);
  }

  @Post(':id/invite')
  invitePlayer(@Param('id') partyId: string, @Req() req: any, @Body() dto: InvitePlayerDto) {
    return this.partyService.invitePlayer(partyId, req.user.id, dto);
  }

  @Get('invites')
  getPartyInvites(@Req() req: any) {
    return this.partyService.getPartyInvites(req.user.id);
  }

  @Post('invites/:id/respond')
  respondToInvite(@Param('id') inviteId: string, @Req() req: any, @Body('status') status: CommonStatus) {
    return this.partyService.respondToInvite(inviteId, req.user.id, status);
  }

  @Delete(':id/members/:memberId')
  kickMember(@Param('id') partyId: string, @Param('memberId') memberId: string, @Req() req: any) {
    return this.partyService.kickMember(partyId, memberId, req.user.id);
  }

  @Delete(':id/leave')
  leaveParty(@Param('id') partyId: string, @Req() req: any) {
    return this.partyService.leaveParty(partyId, req.user.id);
  }
}
