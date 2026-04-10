import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MediaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(file: Express.Multer.File) {
    return this.prisma.media.create({
      data: {
        content: Buffer.from(file.buffer),
        mimeType: file.mimetype,
        fileName: file.originalname,
      },
      select: { id: true },
    });
  }

  async findOne(id: string) {
    const media = await this.prisma.media.findUnique({
      where: { id },
    });
    if (!media) throw new NotFoundException('Media not found');
    return media;
  }

  async delete(id: string) {
    return this.prisma.media.delete({ where: { id } }).catch(() => {});
  }
}
