import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserController } from './user.controller';
import { MediaModule } from '../media/media.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, MediaModule],
  controllers: [UsersController, UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
