import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { Response } from 'express';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get(':id')
  async getMedia(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
    const media = await this.mediaService.findOne(id);
    res.set({
      'Content-Type': media.mimeType,
      'Content-Disposition': `inline; filename="${media.fileName}"`,
      'Cache-Control': 'public, max-age=31536000, immutable',
    });
    return new StreamableFile(media.content);
  }
}
