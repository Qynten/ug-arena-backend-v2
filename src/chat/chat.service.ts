import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChatMessageType, TournamentRoleType } from '@prisma/client';
import { NotificationsService } from '../notifications/notifications.service';

const SENDER_SELECT = {
  id: true,
  displayName: true,
  discordName: true,
  photo: true,
  photoId: true,
} as const;

// Staff roles that receive admin-call notifications
const NOTIFIABLE_ROLES: TournamentRoleType[] = [
  TournamentRoleType.MODERATOR,
  TournamentRoleType.DISPUTE_MANAGER,
  TournamentRoleType.TOURNAMENT_OVERSEER,
  TournamentRoleType.DRAFT_ADMIN,
];

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Returns { canAccess: true, canWrite: bool }
   * canWrite = participant, staff, or owner
   * Any authenticated user gets canAccess=true (read-only if not participant)
   */
  async verifyAccess(userId: string, tournamentId: string): Promise<{ canAccess: boolean; canWrite: boolean; isStaff: boolean }> {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      include: {
        staff: { where: { userId } },
        participants: { where: { userId } },
      },
    });

    if (!tournament) return { canAccess: false, canWrite: false, isStaff: false };

    const isOwner = tournament.ownerId === userId;
    const isStaff = tournament.staff.length > 0;
    const isParticipant = tournament.participants.length > 0;

    return {
      canAccess: true,
      canWrite: isOwner || isStaff || isParticipant,
      isStaff: isOwner || isStaff,
    };
  }

  /**
   * Cursor-based pagination — returns messages oldest-first for display.
   * Pass cursor (ISO timestamp) to load messages older than that point.
   */
  async getMessages(
    tournamentId: string,
    cursor?: string,
    limit = 100,
  ): Promise<{ messages: any[]; nextCursor: string | null }> {
    const where: any = { tournamentId, isDeleted: false };
    if (cursor) {
      where.createdAt = { lt: new Date(cursor) };
    }

    const messages = await this.prisma.tournamentChatMessage.findMany({
      where,
      include: { sender: { select: SENDER_SELECT } },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    const nextCursor =
      messages.length === limit ? messages[messages.length - 1].createdAt.toISOString() : null;

    return {
      messages: messages.reverse(), // oldest first for display
      nextCursor,
    };
  }

  /**
   * Persist a new message and return it with sender info.
   */
  async createMessage(
    tournamentId: string,
    senderId: string,
    content: string,
    type: ChatMessageType = ChatMessageType.NORMAL,
    issueType?: string,
  ) {
    return this.prisma.tournamentChatMessage.create({
      data: { tournamentId, senderId, content, type, issueType },
      include: { sender: { select: SENDER_SELECT } },
    });
  }

  /**
   * Soft-delete a message. Caller must verify staff/admin rights before calling.
   */
  async deleteMessage(messageId: string, deletedById: string): Promise<void> {
    const msg = await this.prisma.tournamentChatMessage.findUnique({
      where: { id: messageId },
    });
    if (!msg) throw new NotFoundException('Message not found');

    await this.prisma.tournamentChatMessage.update({
      where: { id: messageId },
      data: { isDeleted: true, deletedById },
    });
  }

  /**
   * Dispatch notification records to all relevant tournament staff when a player calls admin.
   */
  async notifyStaffAdminCall(
    tournamentId: string,
    senderName: string,
    issueType: string,
    messageId: string,
  ): Promise<void> {
    const [tournament, staff] = await Promise.all([
      this.prisma.tournament.findUnique({
        where: { id: tournamentId },
        select: { name: true, ownerId: true },
      }),
      this.prisma.tournamentStaff.findMany({
        where: { tournamentId, role: { in: NOTIFIABLE_ROLES } },
        select: { userId: true },
      }),
    ]);

    if (!tournament) return;

    // Collect unique user IDs: staff + tournament owner
    const staffIds = staff.map((s) => s.userId);
    const userIds = [...new Set([...staffIds, tournament.ownerId])];

    if (userIds.length === 0) return;

    await this.notificationsService.createMany(
      userIds.map((userId) => ({
        userId,
        type: 'ADMIN_CALL',
        title: `Admin Call: ${issueType}`,
        message: `${senderName} needs admin assistance in "${tournament.name}": ${issueType}`,
        payload: { tournamentId, messageId, issueType },
      })),
    );
  }

  /**
   * Fetch all unresolved admin calls for the tournament admin hub.
   */
  async getAdminCalls(tournamentId: string) {
    return this.prisma.tournamentChatMessage.findMany({
      where: { tournamentId, type: ChatMessageType.ADMIN_CALL, isDeleted: false },
      include: { sender: { select: SENDER_SELECT } },
      orderBy: { createdAt: 'desc' },
    });
  }
}
