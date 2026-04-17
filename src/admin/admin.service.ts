import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        displayName: true,
        discordName: true,
        email: true,
        isOwnerBlacklisted: true,
        roles: true,
      },
    });
  }

  async setBlacklist(userId: string, isOwnerBlacklisted: boolean) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    return this.prisma.user.update({
      where: { id: userId },
      data: { isOwnerBlacklisted },
    });
  }

  async setRoles(userId: string, roles: UserRole[]) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    return this.prisma.user.update({
      where: { id: userId },
      data: { roles },
    });
  }

  async getTournaments() {
    return this.prisma.tournament.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        status: true,
        isFeatured: true,
        createdAt: true,
        owner: { select: { displayName: true, discordName: true } },
        _count: { select: { participants: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteTournamentsBulk(ids: string[]) {
    return this.prisma.tournament.deleteMany({
      where: { id: { in: ids } },
    });
  }

  async setFeatured(tournamentId: string, isFeatured: boolean) {
    const tournament = await this.prisma.tournament.findUnique({ where: { id: tournamentId } });
    if (!tournament) throw new NotFoundException('Tournament not found');
    return this.prisma.tournament.update({
      where: { id: tournamentId },
      data: { isFeatured },
    });
  }

  async createUpdate(title: string) {
    return this.prisma.platformUpdate.create({
      data: { title },
    });
  }

  async deleteUpdate(id: string) {
    return this.prisma.platformUpdate.delete({
      where: { id },
    });
  }
}
