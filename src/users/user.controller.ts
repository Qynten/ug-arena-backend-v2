import {
  Controller,
  Patch,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { UsersService } from './users.service';
import { MediaService } from '../media/media.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly mediaService: MediaService,
  ) {}

  @Patch('update-photo')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('photo', { storage: memoryStorage() }))
  async updatePhoto(@GetUser('id') userId: string, @UploadedFile() file: Express.Multer.File) {
    const media = await this.mediaService.create(file);
    return this.usersService.updatePhoto(userId, media.id);
  }

  @Patch('revert-photo')
  @UseGuards(JwtAuthGuard)
  async revertPhoto(@GetUser('id') userId: string) {
    return this.usersService.revertPhotoToDiscord(userId);
  }
}
