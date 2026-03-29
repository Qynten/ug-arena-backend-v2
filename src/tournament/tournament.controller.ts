import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { AssignStaffDto } from './dto/assign-staff.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { TournamentRoleGuard } from '../common/guards/tournament-role.guard';
import { UserRole } from '@prisma/client';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  // REMOVED the @Roles decorator here so any logged-in user can create!
  create(
    @Body() createTournamentDto: CreateTournamentDto,
    @GetUser('id') userId: string,
  ) {
    return this.tournamentService.create(createTournamentDto, userId);
  }

  @Post(':id/staff')
  @UseGuards(JwtAuthGuard, TournamentRoleGuard)
  assignStaff(
    @Param('id') id: string,
    @Body() assignStaffDto: AssignStaffDto,
  ) {
    return this.tournamentService.assignStaff(id, assignStaffDto.userId, assignStaffDto.role);
  }

  @Get(':id/staff')
  @UseGuards(JwtAuthGuard)
  findStaff(@Param('id') id: string) {
    return this.tournamentService.findStaff(id);
  }

  @Delete(':id/staff/:userId')
  @UseGuards(JwtAuthGuard, TournamentRoleGuard)
  removeStaff(
    @Param('id') id: string,
    @Param('userId') userId: string,
  ) {
    return this.tournamentService.removeStaff(id, userId);
  }

  @Get()
  findAll() {
    return this.tournamentService.findAll();
  }

  @Get('my-tournaments')
  @UseGuards(JwtAuthGuard)
  findMyTournaments(@GetUser('id') userId: string) {
    return this.tournamentService.findMyTournaments(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Pass the raw UUID string directly to the service
    return this.tournamentService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateTournamentDto: UpdateTournamentDto,
    @GetUser() user: any,
  ) {
    return this.tournamentService.update(id, updateTournamentDto, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ORGANIZER, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  remove(@Param('id') id: string, @GetUser() user: any) {
    return this.tournamentService.remove(id, user);
  }
}
