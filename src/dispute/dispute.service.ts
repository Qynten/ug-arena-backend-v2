import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MatchMessage } from '@prisma/client';

@Injectable()
export class DisputeService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyUserCanAccessMatch(userId: string, matchId: string): Promise<boolean> {
    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      include: {
        tournament: {
          include: {
            staff: {
              where: { userId },
            },
          },
        },
        participant1: {
          include: {
            user: true,
            team: {
              include: {
                players: { where: { playerId: userId } },
              },
            },
          },
        },
        participant2: {
          include: {
            user: true,
            team: {
              include: {
                players: { where: { playerId: userId } },
              },
            },
          },
        },
      },
    });

    if (!match) {
      throw new NotFoundException('Match not found');
    }

    const { staff } = match.tournament;
    const isOwner = match.tournament.ownerId === userId;

    if (isOwner) return true;

    const hasStaffAccess = staff.length > 0;
    if (hasStaffAccess) return true;

    // Check if user is part of participant1
    const p1 = match.participant1;
    if (p1) {
      if (p1.userId === userId) return true;
      if (p1.team && p1.team.players.length > 0) return true;
    }

    // Check if user is part of participant2
    const p2 = match.participant2;
    if (p2) {
      if (p2.userId === userId) return true;
      if (p2.team && p2.team.players.length > 0) return true;
    }

    return false;
  }

  async createMatchMessage(
    matchId: string,
    senderId: string,
    content: string,
  ): Promise<MatchMessage> {
    const hasAccess = await this.verifyUserCanAccessMatch(senderId, matchId);
    if (!hasAccess) {
      throw new ForbiddenException('User does not have access to this match room');
    }

    return this.prisma.matchMessage.create({
      data: {
        matchId,
        senderId,
        content,
      },
      include: {
        sender: {
          select: {
            id: true,
            discordName: true,
            displayName: true,
            photo: true,
          },
        },
      },
    });
  }
}
