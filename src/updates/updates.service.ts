import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UpdatesService {
  constructor(private readonly prisma: PrismaService) {}

  async getUpdates() {
    return this.prisma.platformUpdate.findMany({
      orderBy: {
        date: 'desc',
      },
    });
  }
}
