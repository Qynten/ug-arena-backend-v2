import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TournamentModule } from './src/tournament/tournament.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TournamentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}