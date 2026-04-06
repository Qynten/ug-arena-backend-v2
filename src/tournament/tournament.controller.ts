import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { AssignStaffDto } from './dto/assign-staff.dto';
import { RegisterTeamDto } from './dto/register-team.dto';
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
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  // REMOVED the @Roles decorator here so any logged-in user can create!
  create(
    @Body() createTournamentDto: CreateTournamentDto,
    @GetUser('id') userId: string,
    @UploadedFile() file?: any,
  ) {
    if (file) {
      createTournamentDto.imageUrl = `/uploads/${file.filename}`;
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
  getTournamentTeams(@Param('id') id: string) {
    return this.tournamentService.getTournamentTeams(id);
  }

  @Patch(':id/matches/:matchId')
  @UseGuards(JwtAuthGuard)
  updateMatchScore(
    @Param('id') id: string,
    @Param('matchId') matchId: string,
    @GetUser('id') userId: string,
    @Body() payload: { team1Score: number; team2Score: number },
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
  update(
    @Param('id') id: string,
    @Body() updateTournamentDto: UpdateTournamentDto,
    @GetUser() user: any,
  ) {
    return this.tournamentService.update(id, updateTournamentDto, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @GetUser() user: any) {
    return this.tournamentService.remove(id, user);
  }
}
