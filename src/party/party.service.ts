import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { InvitePlayerDto } from './dto/invite-player.dto';
import { TeamPlayerRole, CommonStatus, NotificationType } from '@prisma/client';

@Injectable()
export class PartyService {
  constructor(private prisma: PrismaService) {}

  async createParty(userId: string, dto: CreatePartyDto) {
    const existingParty = await this.prisma.partyMember.findFirst({
      where: { userId },
    });

    if (existingParty) {
      throw new BadRequestException(
        'You are already in a party. Leave it first before creating a new one.',
      );
    }

    return this.prisma.party.create({
      data: {
        name: dto.name,
        ownerId: userId,
        members: {
          create: {
            userId,
            role: TeamPlayerRole.CAPTAIN,
          },
        },
      },
      include: {
        members: {
          include: {
            user: { select: { id: true, discordName: true, displayName: true, photo: true } },
          },
        },
      },
    });
  }

  async getMyParty(userId: string) {
    const membership = await this.prisma.partyMember.findFirst({
      where: { userId },
      include: {
        party: {
          include: {
            members: {
              include: {
                user: { select: { id: true, discordName: true, displayName: true, photo: true } },
              },
            },
            invites: {
              where: { status: CommonStatus.PENDING },
              include: {
                user: { select: { id: true, discordName: true, displayName: true, photo: true } },
              },
              orderBy: { createdAt: 'desc' },
            },
          },
        },
      },
    });

    return membership ? membership.party : null;
  }

  async invitePlayer(partyId: string, userId: string, dto: InvitePlayerDto) {
    const party = await this.prisma.party.findUnique({
      where: { id: partyId },
      include: { members: true },
    });

    if (!party) throw new NotFoundException('Party not found.');
    if (party.ownerId !== userId)
      throw new ForbiddenException('Only the party captain can invite players.');

    const targetUser = await this.prisma.user.findFirst({
      where: { discordName: dto.discordHandle },
    });

    if (!targetUser) throw new NotFoundException('User with that Discord handle not found.');
    if (targetUser.id === userId) throw new BadRequestException('You cannot invite yourself.');

    const isMember = party.members.some((m) => m.userId === targetUser.id);
    if (isMember) throw new BadRequestException('User is already in the party.');

    const existingInvite = await this.prisma.partyInvite.findFirst({
      where: { partyId, userId: targetUser.id, status: CommonStatus.PENDING },
    });

    if (existingInvite)
      throw new BadRequestException('An active invite has already been sent to this user.');

    const invite = await this.prisma.partyInvite.create({
      data: {
        partyId,
        userId: targetUser.id,
      },
    });

    await this.prisma.notification.create({
      data: {
        userId: targetUser.id,
        type: NotificationType.PARTY_INVITE,
        title: 'New Party Invite',
        message: `You have been invited to join the party "${party.name}".`,
        payload: { partyId: party.id },
      },
    });

    return invite;
  }

  async getPartyInvites(userId: string) {
    return this.prisma.partyInvite.findMany({
      where: { userId },
      include: {
        party: {
          include: {
            owner: { select: { id: true, discordName: true, displayName: true, photo: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async respondToInvite(inviteId: string, userId: string, status: CommonStatus) {
    if (status !== CommonStatus.ACCEPTED && status !== CommonStatus.REJECTED) {
      throw new BadRequestException('Invalid status.');
    }

    const invite = await this.prisma.partyInvite.findUnique({
      where: { id: inviteId },
    });

    if (!invite) throw new NotFoundException('Invite not found.');
    if (invite.userId !== userId) throw new ForbiddenException('Not authorized.');
    if (invite.status !== CommonStatus.PENDING)
      throw new BadRequestException('Invite is no longer pending.');

    return this.prisma.$transaction(async (prisma) => {
      // 1. Update the invite status
      await prisma.partyInvite.update({
        where: { id: inviteId },
        data: { status },
      });

      if (status === CommonStatus.ACCEPTED) {
        // 2. If user is in another party, remove them
        const existingMembership = await prisma.partyMember.findFirst({
          where: { userId },
        });

        if (existingMembership) {
          // Check if they are the captain of that party
          const oldParty = await prisma.party.findUnique({
            where: { id: existingMembership.partyId },
          });
          if (oldParty?.ownerId === userId) {
            // Disband the old party
            await prisma.party.delete({ where: { id: oldParty.id } });
          } else {
            await prisma.partyMember.delete({ where: { id: existingMembership.id } });
          }
        }

        // 3. Add to new party
        await prisma.partyMember.create({
          data: {
            partyId: invite.partyId,
            userId,
            role: TeamPlayerRole.MEMBER,
          },
        });
      }

      return { message: `Invite ${status.toLowerCase()} successfully.` };
    });
  }

  async leaveParty(partyId: string, userId: string) {
    const party = await this.prisma.party.findUnique({ where: { id: partyId } });
    if (!party) throw new NotFoundException('Party not found.');

    const membership = await this.prisma.partyMember.findUnique({
      where: { partyId_userId: { partyId, userId } },
    });

    if (!membership) throw new BadRequestException('You are not in this party.');

    if (party.ownerId === userId) {
      // Disband party if owner leaves
      return this.prisma.party.delete({ where: { id: partyId } });
    }

    return this.prisma.partyMember.delete({ where: { id: membership.id } });
  }

  async kickMember(partyId: string, memberId: string, userId: string) {
    const party = await this.prisma.party.findUnique({ where: { id: partyId } });
    if (!party) throw new NotFoundException('Party not found.');

    if (party.ownerId !== userId) {
      throw new ForbiddenException('Only the party captain can kick members.');
    }

    if (memberId === userId) {
      throw new BadRequestException('You cannot kick yourself.');
    }

    const membership = await this.prisma.partyMember.findUnique({
      where: { partyId_userId: { partyId, userId: memberId } },
    });

    if (!membership) throw new BadRequestException('User is not in this party.');

    return this.prisma.partyMember.delete({ where: { id: membership.id } });
  }
}
