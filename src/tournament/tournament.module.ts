import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TournamentRoleGuard } from '../common/guards/tournament-role.guard';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, TournamentRoleGuard],
})
export class TournamentModule {}
