import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DisputeMessage } from '@prisma/client';

@Injectable()
export class DisputeService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyUserCanAccessDispute(userId: string, disputeId: string): Promise<boolean> {
    const dispute = await this.prisma.matchDispute.findUnique({
      where: { id: disputeId },
      include: {
        match: {
          include: {
            tournament: {
              include: {
                staff: {
                  where: { userId }
                }
              }
            },
            participant1: {
              include: {
                user: true,
                team: {
                  include: {
                    players: { where: { playerId: userId } }
                  }
                }
              }
            },
            participant2: {
              include: {
                user: true,
                team: {
                  include: {
                    players: { where: { playerId: userId } }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!dispute) {
      throw new NotFoundException('Dispute not found');
    }

    const { match } = dispute;
    const { staff } = match.tournament;

    const hasStaffAccess = staff.some(s => s.role === 'DRAFT_ADMIN' || s.role === 'DISPUTE_MANAGER');
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

    // If the user happens to have global ADMIN/SUPER_ADMIN roles we could check that, 
    // but schema says roles is on User model. Let's assume dispute rules apply locally first.
    
    return false;
  }

  async createDisputeMessage(disputeId: string, senderId: string, content: string): Promise<DisputeMessage> {
    const hasAccess = await this.verifyUserCanAccessDispute(senderId, disputeId);
    if (!hasAccess) {
      throw new ForbiddenException('User does not have access to this dispute room');
    }

    return this.prisma.disputeMessage.create({
      data: {
        disputeId,
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
          }
        }
      }
    });
  }
}
