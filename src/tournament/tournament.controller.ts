import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { TournamentService } from './tournament.service';
import { MediaService } from '../media/media.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { AssignStaffDto } from './dto/assign-staff.dto';
import { RegisterTeamDto } from './dto/register-team.dto';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdateMatchScoreDto } from './dto/update-match-score.dto';
import { InvitePlayerDto } from './dto/invite-player.dto';
import { RespondTeamInviteDto } from './dto/respond-team-invite.dto';
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
import { CreateCustomTeamDto } from './dto/create-custom-team.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { TournamentRoleGuard } from '../common/guards/tournament-role.guard';
import { TournamentRoles } from '../common/decorators/tournament-roles.decorator';
import { UserRole, TournamentRoleType } from '@prisma/client';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('tournaments')
export class TournamentController {
  constructor(
    private readonly tournamentService: TournamentService,
    private readonly mediaService: MediaService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', { storage: memoryStorage() }))
  // REMOVED the @Roles decorator here so any logged-in user can create!
  async create(
    @Body() createTournamentDto: CreateTournamentDto,
    @GetUser('id') userId: string,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const media = await this.mediaService.create(file);
      createTournamentDto.imageId = media.id;
    }
    return this.tournamentService.create(createTournamentDto, userId);
  }

  @Get(':id/staff')
  getTournamentStaff(@Param('id') id: string) {
    return this.tournamentService.getTournamentStaff(id);
  }

  @Get(':id/bracket')
  getBracket(@Param('id') id: string) {
    return this.tournamentService.getBracket(id);
  }

  @Post(':id/generate-bracket')
  @UseGuards(JwtAuthGuard)
  generateBracket(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.generateBracket(id, userId);
  }

  @Post(':id/register')
  @UseGuards(JwtAuthGuard)
  registerTeam(
    @Param('id') id: string,
    @GetUser('id') userId: string,
    @Body() registerTeamDto: RegisterTeamDto,
  ) {
    return this.tournamentService.registerTeam(id, userId, registerTeamDto);
  }

  @Get(':id/teams')
  getTournamentTeams(
    @Param('id') id: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.tournamentService.getTournamentTeams(id, page, limit);
  }

  @Post(':id/open-registration')
  @UseGuards(JwtAuthGuard)
  openRegistration(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.openRegistration(id, userId);
  }

  @Post(':id/teams/:teamId/invite')
  @UseGuards(JwtAuthGuard)
  invitePlayerToTeam(
    @Param('teamId') teamId: string,
    @GetUser('id') userId: string,
    @Body() body: InvitePlayerDto,
  ) {
    return this.tournamentService.invitePlayerToTeam(teamId, body.discordHandle, userId);
  }

  @Patch('invites/:registrationId/respond')
  @UseGuards(JwtAuthGuard)
  respondToTeamInvite(
    @Param('registrationId') registrationId: string,
    @GetUser('id') userId: string,
    @Body() body: RespondTeamInviteDto,
  ) {
    return this.tournamentService.respondToTeamInvite(registrationId, userId, body.status);
  }

  @Get('invites/me')
  @UseGuards(JwtAuthGuard)
  getMyTeamInvites(@GetUser('id') userId: string) {
    return this.tournamentService.getMyTeamInvites(userId);
  }

  // ---------------------------------------------------------------------------
  // TEAM REGISTRATION / JOIN FLOW
  // Note: fixed-path routes (/my-team) must come before param routes (/:teamId)
  // ---------------------------------------------------------------------------

  @Post(':id/join-with-party')
  @UseGuards(JwtAuthGuard)
  joinWithParty(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.joinWithParty(id, userId);
  }

  @Post(':id/create-open-team-with-party')
  @UseGuards(JwtAuthGuard)
  createOpenTeamWithParty(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.createOpenTeamWithParty(id, userId);
  }

  @Post(':id/join-solo')
  @UseGuards(JwtAuthGuard)
  joinSolo(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.joinSolo(id, userId);
  }

  @Get(':id/solo-queue')
  getSoloQueue(@Param('id') id: string) {
    return this.tournamentService.getSoloQueue(id);
  }

  @Delete(':id/solo-queue/:participantId')
  @UseGuards(JwtAuthGuard)
  removeSoloQueueParticipant(
    @Param('id') id: string,
    @Param('participantId') participantId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.removeSoloQueueParticipant(id, participantId, userId);
  }

  @Delete(':id/leave')
  @UseGuards(JwtAuthGuard)
  leaveTournament(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.leaveTournament(id, userId);
  }

  @Post(':id/create-team')
  @UseGuards(JwtAuthGuard)
  createCustomTeam(
    @Param('id') id: string,
    @GetUser('id') userId: string,
    @Body() body: CreateCustomTeamDto,
  ) {
    return this.tournamentService.createCustomTeam(id, userId, body.name);
  }

  @Post(':id/join-team/:teamId')
  @UseGuards(JwtAuthGuard)
  joinExistingTeam(
    @Param('id') id: string,
    @Param('teamId') teamId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.joinExistingTeam(id, teamId, userId);
  }

  @Get(':id/my-team')
  @UseGuards(JwtAuthGuard)
  getMyTeamInTournament(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.getMyTeamInTournament(id, userId);
  }

  @Get(':id/teams/:teamId')
  getTeam(@Param('id') id: string, @Param('teamId') teamId: string) {
    return this.tournamentService.getTeam(id, teamId);
  }

  @Delete(':id/teams/:teamId')
  @UseGuards(JwtAuthGuard)
  removeTeam(
    @Param('id') id: string,
    @Param('teamId') teamId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.removeTeam(id, teamId, userId);
  }

  @Delete(':id/teams/:teamId/members/:memberId')
  @UseGuards(JwtAuthGuard)
  removeTeamMember(
    @Param('id') id: string,
    @Param('teamId') teamId: string,
    @Param('memberId') memberId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.removeTeamMember(id, teamId, memberId, userId);
  }

  @Patch(':id/teams/:teamId/members/:memberId/captain')
  @UseGuards(JwtAuthGuard)
  forceTeamCaptain(
    @Param('id') id: string,
    @Param('teamId') teamId: string,
    @Param('memberId') memberId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.forceTeamCaptain(id, teamId, memberId, userId);
  }

  @Post(':id/teams/:teamId/vote')
  @UseGuards(JwtAuthGuard)
  voteTeamAction(
    @Param('id') id: string,
    @Param('teamId') teamId: string,
    @Body('type') type: 'CAPTAIN' | 'KICK',
    @Body('targetId') targetId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.voteTeamAction(id, teamId, type, targetId, userId);
  }

  @Get(':id/teams/:teamId/messages')
  @UseGuards(JwtAuthGuard)
  getTeamMessages(
    @Param('teamId') teamId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.getTeamMessages(teamId, userId);
  }

  @Post(':id/teams/:teamId/messages')
  @UseGuards(JwtAuthGuard)
  addTeamMessage(
    @Param('teamId') teamId: string,
    @GetUser('id') userId: string,
    @Body('content') content: string,
  ) {
    return this.tournamentService.addTeamMessage(teamId, userId, content);
  }

  @Post(':id/teams/:teamId/disputes')
  @UseGuards(JwtAuthGuard)
  openTeamDispute(
    @Param('teamId') teamId: string,
    @GetUser('id') userId: string,
    @Body() body: { reason?: string; context?: string }
  ) {
    return this.tournamentService.openTeamDispute(teamId, userId, body.reason, body.context);
  }

  @Patch(':id/matches/:matchId')
  @UseGuards(JwtAuthGuard)
  updateMatchScore(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
    @Body() payload: UpdateMatchScoreDto,
  ) {
    return this.tournamentService.updateMatchScore(id, matchId, userId, payload);
  }

  @Post(':id/staff')
  @UseGuards(JwtAuthGuard)
  assignStaff(
    @Param('id') id: string,
    @Body() assignStaffDto: AssignStaffDto,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.assignStaff(id, userId, assignStaffDto);
  }

  @Delete(':id/staff/:userId')
  @UseGuards(JwtAuthGuard)
  removeStaff(
    @Param('id') id: string,
    @Param('userId') targetUserId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.removeStaff(id, userId, targetUserId);
  }

  @Get()
  findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.tournamentService.findAll(page, limit);
  }

  @Get('my-tournaments')
  @UseGuards(JwtAuthGuard)
  findMyTournaments(
    @GetUser('id') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.tournamentService.findMyTournaments(userId, page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Pass the raw UUID string directly to the service
    return this.tournamentService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image', { storage: memoryStorage() }))
  async update(
    @Param('id') id: string,
    @Body() updateTournamentDto: UpdateTournamentDto,
    @GetUser() user: any,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const media = await this.mediaService.create(file);
      updateTournamentDto.imageId = media.id;
    }
    return this.tournamentService.update(id, updateTournamentDto, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @GetUser() user: any) {
    return this.tournamentService.remove(id, user);
  }

  @Post(':id/go-live')
  @UseGuards(JwtAuthGuard)
  goLive(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.goLive(id, userId);
  }

  @Post(':id/seed')
  @UseGuards(JwtAuthGuard, TournamentRoleGuard)
  @TournamentRoles(TournamentRoleType.SEED_ADMIN, TournamentRoleType.TOURNAMENT_OVERSEER)
  seedBracket(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.seedBracket(id, userId);
  }

  @Patch(':id/matches/:matchId/seed')
  @UseGuards(JwtAuthGuard)
  seedMatch(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
    @Body() body: { participant1Id?: string; participant2Id?: string },
  ) {
    return this.tournamentService.seedMatch(id, matchId, userId, body);
  }

  @Post(':id/matches/:matchId/disputes')
  @UseGuards(JwtAuthGuard)
  openDispute(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
    @Body() body: { reason?: string; context?: string }
  ) {
    return this.tournamentService.openDispute(id, matchId, userId, body?.reason, body?.context);
  }

  @Get(':id/matches/:matchId/disputes')
  getDisputeByMatch(@Param('matchId') matchId: string) {
    return this.tournamentService.getDisputeByMatch(matchId);
  }

  @Get(':id/disputes')
  @UseGuards(JwtAuthGuard)
  getAllDisputes(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.tournamentService.getAllDisputes(id, userId);
  }

  @Post(':id/matches/:matchId/check-in')
  @UseGuards(JwtAuthGuard)
  checkInMatch(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.checkInMatch(id, matchId, userId);
  }

  @Post(':id/matches/:matchId/admin-check-in')
  @UseGuards(JwtAuthGuard)
  adminCheckIn(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
    @Body('teamNum') teamNum: 1 | 2,
  ) {
    return this.tournamentService.adminCheckIn(id, matchId, userId, teamNum);
  }

  @Post(':id/matches/:matchId/report-no-show')
  @UseGuards(JwtAuthGuard)
  reportNoShow(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.reportNoShow(id, matchId, userId);
  }

  @Get(':id/matches/:matchId/messages')
  @UseGuards(JwtAuthGuard)
  getMatchMessages(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.getMatchMessages(id, matchId, userId);
  }

  @Post(':id/matches/:matchId/messages')
  @UseGuards(JwtAuthGuard)
  addMatchMessage(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
    @Body('content') content: string,
  ) {
    return this.tournamentService.addMatchMessage(id, matchId, userId, content);
  }

  @Patch('disputes/:disputeId/resolve')
  @UseGuards(JwtAuthGuard)
  resolveDispute(
    @Param('disputeId') disputeId: string,
    @GetUser('id') userId: string,
    @Body() body: ResolveDisputeDto,
  ) {
    return this.tournamentService.resolveDispute(
      disputeId,
      userId,
      body.resolution,
      body.tournamentId,
    );
  }
}
