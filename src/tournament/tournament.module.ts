import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TournamentRoleGuard } from '../common/guards/tournament-role.guard';
import { MediaModule } from '../media/media.module';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [PrismaModule, MediaModule, NotificationsModule],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentRoleGuard],
})
export class TournamentModule {}
