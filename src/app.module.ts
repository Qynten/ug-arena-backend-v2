import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TournamentModule } from './tournament/tournament.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PartyModule } from './party/party.module';
import { DisputeModule } from './dispute/dispute.module';
import { MediaModule } from './media/media.module';
import { ChatModule } from './chat/chat.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TournamentModule,
    NotificationsModule,
    PartyModule,
    DisputeModule,
    MediaModule,
    ChatModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
