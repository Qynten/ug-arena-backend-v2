import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DisputeGateway } from './dispute.gateway';
import { DisputeService } from './dispute.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  providers: [DisputeGateway, DisputeService],
})
export class DisputeModule {}
