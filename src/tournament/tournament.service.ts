import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { RegisterTeamDto } from './dto/register-team.dto';
import { CreatePartyDto } from './dto/create-party.dto';
import { PrismaService } from '../prisma/prisma.service';
import {
  UserRole,
  TournamentRoleType,
  MatchStatus,
  TournamentStatus,
  TeamPlayerRole,
  NotificationType,
  CommonStatus,
  BracketType,
  MatchResult,
  ParticipantStatus,
} from '@prisma/client';

import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class TournamentService {
  private readonly logger = new Logger(TournamentService.name);

  // 1. Inject the Prisma Service so we can talk to the database
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
  ) {}

  private async checkOwnership(tournamentId: string, user: any) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }

    const isAdmin =
      user.roles?.includes(UserRole.ADMIN) || user.roles?.includes(UserRole.SUPER_ADMIN);
    const isOwner = tournament.ownerId === user.id;

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('You do not have permission to modify this tournament.');
    }

    return tournament;
  }

  private async generateUniqueSlug(name: string): Promise<string> {
    let baseSlug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (!baseSlug) {
      baseSlug = 'tournament';
    }

    let slug = baseSlug;
    let isUnique = false;

    while (!isUnique) {
      const existing = await this.prisma.tournament.findUnique({
        where: { slug },
        select: { id: true },
      });
      if (!existing) {
        isUnique = true;
      } else {
        const randomString = Math.random().toString(36).substring(2, 6);
        slug = `${baseSlug}-${randomString}`;
      }
    }

    return slug;
  }

  // 2. The logic from your old script.ts for creating a tournament
  async create(createTournamentDto: CreateTournamentDto, ownerId: string) {
    const slug = await this.generateUniqueSlug(createTournamentDto.name);

    try {
      return await this.prisma.tournament.create({
        data: {
          slug,
          name: createTournamentDto.name,
          game: createTournamentDto.game,
          region: createTournamentDto.region,
          startTime: createTournamentDto.startTime
            ? new Date(createTournamentDto.startTime)
            : undefined,
          imageUrl: createTournamentDto.imageUrl,
          imageMedia: createTournamentDto.imageId
            ? { connect: { id: createTournamentDto.imageId } }
            : undefined,
          regStart: createTournamentDto.regStart,
          regEnd: createTournamentDto.regEnd,
          seedingStart: createTournamentDto.seedingStart,
          seedingEnd: createTournamentDto.seedingEnd,
          liveStart: createTournamentDto.liveStart,
          liveEnd: createTournamentDto.liveEnd,
          checkInStart: createTournamentDto.checkInStart,
          checkInEnd: createTournamentDto.checkInEnd,
          maxParticipants: createTournamentDto.maxParticipants,
          maxTeamSize: createTournamentDto.maxTeamSize,
          minTeamSize: createTournamentDto.minTeamSize,
          bracketType: createTournamentDto.bracketType,
          allowSubstitutions: createTournamentDto.allowSubstitutions,

          owner: {
            connect: { id: ownerId },
          },

          // Dynamically map the array of prize pools from the request
          prizePools: createTournamentDto.prizePools
            ? {
                create: createTournamentDto.prizePools.map((pool) => ({
                  position: pool.position as any,
                  amount: pool.amount,
                })),
              }
            : undefined,
        },
        include: {
          owner: true,
          prizePools: true,
        },
      });
    } catch (error: any) {
      this.logger.error(`Failed to create tournament: ${error.message}`);
      if (error.code === 'P2025') {
        throw new UnauthorizedException(
          'Your user session is invalid or your account record is missing. Please log out and log back in.',
        );
      }
      throw new BadRequestException(error.message || 'Failed to create tournament.');
    }
  }

  async assignStaff(
    tournamentId: string,
    ownerId: string,
    payload: { discordHandle: string; role: TournamentRoleType },
  ) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }

    // Strict ownership check as per instructions
    if (tournament.ownerId !== ownerId) {
      throw new ForbiddenException('Only the tournament owner can assign staff.');
    }

    const { discordHandle, role } = payload;

    const user = await this.prisma.user.findFirst({
      where: { discordName: discordHandle },
    });

    if (!user) {
      throw new BadRequestException(
        'User not found. Make sure they have logged into the website at least once!',
      );
    }

    try {
      return await this.prisma.tournamentStaff.upsert({
        where: {
          userId_tournamentId_role: {
            userId: user.id,
            tournamentId,
            role,
          },
        },
        update: {
          role,
        },
        create: {
          userId: user.id,
          tournamentId,
          role,
        },
        include: {
          user: {
            select: {
              id: true,
              discordName: true,
              email: true,
              photo: true,
            },
          },
        },
      });
    } catch (error: any) {
      throw error;
    }
  }

  async getTournamentStaff(tournamentId: string) {
    const staff = await this.prisma.tournamentStaff.findMany({
      where: { tournamentId },
      include: {
        user: {
          select: {
            id: true,
            discordName: true,
            email: true,
            photo: true,
          },
        },
      },
    });
    return staff;
  }

  async removeStaff(tournamentId: string, ownerId: string, targetUserId: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }

    if (tournament.ownerId !== ownerId) {
      throw new ForbiddenException('Only the tournament owner can remove staff.');
    }

    return this.prisma.tournamentStaff.deleteMany({
      where: {
        tournamentId,
        userId: targetUserId,
      },
    });
  }

  async findMyTournaments(userId: string, pageStr?: string, limitStr?: string) {
    const page = parseInt(pageStr || '1', 10);
    const limit = parseInt(limitStr || '100', 10);
    const skip = (page - 1) * limit;

    const whereClause = {
      isDeleted: false,
      OR: [{ ownerId: userId }, { staff: { some: { userId } } }],
    };

    const [data, total] = await Promise.all([
      this.prisma.tournament.findMany({
        where: whereClause,
        include: {
          prizePools: true,
          _count: {
            select: { participants: { where: { status: { not: ParticipantStatus.CANCELLED } } } },
          },
          staff: {
            include: {
              user: {
                select: {
                  id: true,
                  discordName: true,
                  email: true,
                  photo: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.tournament.count({ where: whereClause }),
    ]);

    return { data, meta: { total, page, limit } };
  }

  // 3. The logic from your old script.ts for fetching tournaments
  async findAll(pageStr?: string, limitStr?: string) {
    const page = parseInt(pageStr || '1', 10);
    const limit = parseInt(limitStr || '100', 10);
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.tournament.findMany({
        where: { isDeleted: false },
        orderBy: { createdAt: 'desc' },
        include: { 
          prizePools: true,
          _count: {
            select: { participants: { where: { status: { not: ParticipantStatus.CANCELLED } } } },
          },
        },
        skip,
        take: limit,
      }),
      this.prisma.tournament.count({ where: { isDeleted: false } }),
    ]);

    return { data, meta: { total, page, limit } };
  }

  // (NestJS generated these placeholders for you to fill out later)
  async findOne(idOrSlug: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      include: {
        prizePools: true,
        staff: {
          include: {
            user: {
              select: {
                id: true,
                discordName: true,
                email: true,
                photo: true,
              },
            },
          },
        },
      },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID or slug ${idOrSlug} not found.`);
    }

    return tournament;
  }

  async update(id: string, updateTournamentDto: UpdateTournamentDto, user: any) {
    await this.checkOwnership(id, user);

    const { prizePools, imageId, ...rest } = updateTournamentDto;

    // Build the prize pool update logic
    const prizePoolUpdate = prizePools
      ? {
          // 1. Delete prize pools that are not in the new list
          deleteMany: {
            id: {
              notIn: prizePools.filter((p) => p.id).map((p) => p.id!),
            },
          },
          // 2. Update existing ones
          update: prizePools
            .filter((p) => p.id)
            .map((pool) => ({
              where: { id: pool.id },
              data: {
                position: pool.position as any,
                amount: pool.amount,
              },
            })),
          // 3. Create new ones
          create: prizePools
            .filter((p) => !p.id)
            .map((pool) => ({
              position: pool.position as any,
              amount: pool.amount,
            })),
        }
      : undefined;

    try {
      return await this.prisma.tournament.update({
        where: { id },
        data: {
          ...rest,
          imageMedia: imageId
            ? { connect: { id: imageId } }
            : undefined,
          ...(prizePoolUpdate && {
            prizePools: prizePoolUpdate,
          }),
        },
        include: {
          prizePools: true,
        },
      });
    } catch (error: any) {
      this.logger.error(`Failed to update tournament ${id}:`, error?.message ?? error);
      if (error?.code === 'P2025') {
        throw new NotFoundException(`Cannot update. Tournament with ID ${id} not found.`);
      }
      throw new BadRequestException(error?.message ?? 'Failed to update tournament.');
    }
  }

  async remove(id: string, user: any) {
    await this.checkOwnership(id, user);

    try {
      return await this.prisma.tournament.update({
        where: { id },
        data: { isDeleted: true },
      });
    } catch (error) {
      throw new NotFoundException(`Cannot delete. Tournament with ID ${id} not found.`);
    }
  }

  async getBracket(idOrSlug: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: { id: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament not found.`);
    }

    return this.prisma.match.findMany({
      where: { tournamentId: tournament.id },
      include: {
        participant1: {
          include: {
            user: {
              select: {
                id: true,
                discordName: true,
                photo: true,
              },
            },
            team: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        participant2: {
          include: {
            user: {
              select: {
                id: true,
                discordName: true,
                photo: true,
              },
            },
            team: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        round: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async updateMatchScore(
    tournamentId: string,
    matchId: string,
    userId: string,
    payload: { team1Score: number; team2Score: number },
  ) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true, allowDraws: true, bracketType: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }

    // Check staff roles for scoring permission
    const staffMember = await this.prisma.tournamentStaff.findFirst({
      where: {
        tournamentId,
        userId,
        role: {
          in: [TournamentRoleType.SCORE_REPORTER, TournamentRoleType.DRAFT_ADMIN],
        },
      },
    });

    // Check if user is owner or authorized staff
    if (tournament.ownerId !== userId && !staffMember) {
      throw new ForbiddenException(
        'You do not have permission to report scores for this tournament.',
      );
    }

    const { team1Score, team2Score } = payload;
    const isDraw = team1Score === team2Score;

    // Determine winner/draw outcome
    let winnerId: string | null = null;
    let drawFlag = false;

    if (isDraw) {
      if (!tournament.allowDraws) {
        // Draws not allowed: record the draw, do NOT advance — owner decides overtime
        drawFlag = true;
        winnerId = null;
      } else {
        drawFlag = true;
        winnerId = null;
      }
    }

    return this.prisma.$transaction(async (prisma) => {
      // Fetch match with round info so advanceWinner has full context
      const match = await prisma.match.findUnique({
        where: { id: matchId },
        include: { participant1: true, participant2: true },
      });

      if (!match) throw new NotFoundException(`Match not found.`);
      if (match.tournamentId !== tournamentId) {
        throw new BadRequestException('Match does not belong to this tournament.');
      }

      // Resolve winner from scores if not a draw
      if (!isDraw) {
        winnerId = team1Score > team2Score ? match.participant1Id : match.participant2Id;
      }

      // Write scores, winner, draw flag, and mark COMPLETED
      const updatedMatch = await prisma.match.update({
        where: { id: matchId },
        data: {
          p1Score: team1Score,
          p2Score: team2Score,
          status: MatchStatus.COMPLETED,
          winnerId,
          draw: drawFlag,
        },
      });

      // Write MatchHistory records for both participants
      if (match.participant1Id && match.participant2Id) {
        const p1Result = isDraw
          ? MatchResult.DRAW
          : winnerId === match.participant1Id
            ? MatchResult.WIN
            : MatchResult.LOSS;
        const p2Result = isDraw
          ? MatchResult.DRAW
          : winnerId === match.participant2Id
            ? MatchResult.WIN
            : MatchResult.LOSS;

        await prisma.matchHistory.createMany({
          data: [
            {
              participantId: match.participant1Id,
              opponentId: match.participant2Id,
              tournamentId,
              roundId: match.roundId,
              matchId: match.id,
              participantScore: team1Score,
              opponentScore: team2Score,
              result: p1Result,
            },
            {
              participantId: match.participant2Id,
              opponentId: match.participant1Id,
              tournamentId,
              roundId: match.roundId,
              matchId: match.id,
              participantScore: team2Score,
              opponentScore: team1Score,
              result: p2Result,
            },
          ],
        });

        // Update participant win/loss/draw tallies
        if (isDraw) {
          await prisma.participant.updateMany({
            where: { id: { in: [match.participant1Id, match.participant2Id] } },
            data: { draws: { increment: 1 } },
          });
        } else if (winnerId) {
          const loserId =
            winnerId === match.participant1Id ? match.participant2Id : match.participant1Id;
          await prisma.participant.update({
            where: { id: winnerId },
            data: { wins: { increment: 1 } },
          });
          if (loserId) {
            await prisma.participant.update({
              where: { id: loserId },
              data: { losses: { increment: 1 } },
            });
          }
        }
      }

      // Advance winner to next match (only if there IS a winner — not on draws)
      if (winnerId && !drawFlag) {
        await this.advanceWinner({ ...updatedMatch, winnerId }, prisma, tournament.bracketType);
      } else if (drawFlag) {
        this.logger.log(
          `Match ${matchId} ended in a draw. No automatic progression. ` +
            `${tournament.allowDraws ? 'Draw recorded.' : 'allowDraws=false — owner must decide overtime rules.'}`,
        );
      }

      return updatedMatch;
    });
  }

  async registerTeam(idOrSlug: string, userId: string, dto: RegisterTeamDto) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament not found.`);
    }

    if (tournament.status !== TournamentStatus.REGISTRATION) {
      throw new BadRequestException('Registration is closed.');
    }

    // For a quick solo/single-player register the team size is 1.
    // Enforce minTeamSize ≤ 1 ≤ maxTeamSize so solo tournaments still work.
    if (tournament.minTeamSize > 1) {
      throw new BadRequestException(
        `This tournament requires a minimum team size of ${tournament.minTeamSize}. ` +
          `Please create a party, build your roster, then submit via POST /tournaments/:id/parties/:teamId/submit.`,
      );
    }

    const existingParticipant = await this.prisma.participant.findFirst({
      where: {
        tournamentId: tournament.id,
        userId: userId,
        status: { not: ParticipantStatus.CANCELLED },
      },
    });

    if (existingParticipant) {
      throw new BadRequestException('You are already registered for this tournament.');
    }

    // Also block if user is already on a team in this tournament
    const existingTeamMembership = await this.prisma.teamPlayer.findFirst({
      where: {
        playerId: userId,
        team: { tournamentId: tournament.id, isDeleted: false },
      },
    });

    if (existingTeamMembership) {
      throw new BadRequestException('You are already part of a team in this tournament.');
    }

    return this.prisma.$transaction(async (prisma) => {
      const team = await prisma.team.create({
        data: {
          name: dto.name,
          tournamentId: tournament.id,
          players: {
            create: {
              playerId: userId,
              role: TeamPlayerRole.CAPTAIN,
            },
          },
        },
      });

      await prisma.participant.deleteMany({
        where: {
          tournamentId: tournament.id,
          userId: userId,
          status: ParticipantStatus.CANCELLED,
        },
      });

      const participant = await prisma.participant.create({
        data: {
          tournamentId: tournament.id,
          userId: userId,
          teamId: team.id,
          rosters: {
            create: {
              userId: userId,
              role: TeamPlayerRole.CAPTAIN,
            },
          },
        },
        include: {
          team: {
            include: {
              players: true,
            },
          },
        },
      });

      return participant;
    });
  }

  async getTournamentTeams(idOrSlug: string, pageStr?: string, limitStr?: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament not found.`);
    }

    const page = parseInt(pageStr || '1', 10);
    const limit = parseInt(limitStr || '100', 10);
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.team.findMany({
        where: { tournamentId: tournament.id, isDeleted: false },
        include: {
          players: {
            include: {
              player: {
                select: {
                  id: true,
                  discordName: true,
                  displayName: true,
                  photo: true,
                },
              },
            },
          },
        },
        skip,
        take: limit,
      }),
      this.prisma.team.count({ where: { tournamentId: tournament.id, isDeleted: false } }),
    ]);

    return { data, meta: { total, page, limit } };
  }

  async openRegistration(idOrSlug: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) throw new NotFoundException(`Tournament not found.`);
    if (tournament.ownerId !== userId)
      throw new ForbiddenException('Only the tournament owner can open registration.');
    if (tournament.status !== TournamentStatus.DRAFT) {
      throw new BadRequestException(
        `Registration can only be opened from DRAFT status. Current status: ${tournament.status}`,
      );
    }

    return this.prisma.tournament.update({
      where: { id: tournament.id },
      data: { status: TournamentStatus.REGISTRATION },
    });
  }

  async invitePlayerToTeam(teamId: string, inviteeDiscordHandle: string, requesterId: string) {
    // Verify team exists and requester is the captain
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: {
        players: { where: { playerId: requesterId, role: TeamPlayerRole.CAPTAIN } },
        tournament: { select: { id: true, name: true } },
      },
    });

    if (!team) throw new NotFoundException(`Team not found.`);
    if (team.players.length === 0)
      throw new ForbiddenException('Only the team captain can invite players.');

    // Find the invitee by Discord handle
    const invitee = await this.prisma.user.findFirst({
      where: { discordName: inviteeDiscordHandle },
    });

    if (!invitee) {
      throw new BadRequestException(
        `No user found with Discord handle "${inviteeDiscordHandle}". Make sure they have logged in at least once.`,
      );
    }

    // Check if already on the team or has a pending invite
    const existingInvite = await this.prisma.teamPlayerRegistration.findFirst({
      where: { teamId, playerId: invitee.id },
    });

    if (existingInvite) {
      throw new BadRequestException(
        'This player already has a pending or accepted invite for this team.',
      );
    }

    const existingPlayer = await this.prisma.teamPlayer.findUnique({
      where: { teamId_playerId: { teamId, playerId: invitee.id } },
    });

    if (existingPlayer) throw new BadRequestException('This player is already on the team.');

    // Get requester info for notification message
    const requester = await this.prisma.user.findUnique({
      where: { id: requesterId },
      select: { discordName: true, displayName: true },
    });

    const captainName = requester?.displayName || requester?.discordName || 'Your captain';

    // Create the invite and the notification in a transaction
    return this.prisma.$transaction(async (prisma) => {
      const registration = await prisma.teamPlayerRegistration.create({
        data: { teamId, playerId: invitee.id, status: CommonStatus.PENDING },
        include: {
          team: true,
          player: { select: { id: true, discordName: true, displayName: true } },
        },
      });

      await this.notificationsService.create({
        userId: invitee.id,
        type: NotificationType.TEAM_INVITE,
        title: 'New Team Invite',
        message: `You have been invited to join the team "${team.name}" for tournament "${team.tournament.name}".`,
        payload: { teamId: team.id, tournamentId: team.tournament.id },
      });

      return registration;
    });
  }

  async respondToTeamInvite(
    registrationId: string,
    playerId: string,
    status: 'ACCEPTED' | 'REJECTED',
  ) {
    const registration = await this.prisma.teamPlayerRegistration.findUnique({
      where: { id: registrationId },
    });

    if (!registration) throw new NotFoundException(`Invite not found.`);
    if (registration.playerId !== playerId)
      throw new ForbiddenException('You can only respond to your own invites.');
    if (registration.status !== CommonStatus.PENDING)
      throw new BadRequestException('This invite has already been responded to.');

    const newStatus = status === 'ACCEPTED' ? CommonStatus.ACCEPTED : CommonStatus.REJECTED;

    return this.prisma.$transaction(async (prisma) => {
      const updated = await prisma.teamPlayerRegistration.update({
        where: { id: registrationId },
        data: { status: newStatus },
      });

      if (newStatus === CommonStatus.ACCEPTED) {
        await prisma.teamPlayer.create({
          data: {
            teamId: registration.teamId,
            playerId,
            role: TeamPlayerRole.MEMBER,
          },
        });
      }

      return updated;
    });
  }

  async getMyTeamInvites(userId: string) {
    return this.prisma.teamPlayerRegistration.findMany({
      where: { playerId: userId },
      include: {
        team: {
          include: {
            tournament: { select: { id: true, name: true, slug: true, status: true } },
            players: {
              where: { role: TeamPlayerRole.CAPTAIN },
              include: {
                player: { select: { id: true, discordName: true, displayName: true, photo: true } },
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async generateBracket(idOrSlug: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament not found.`);
    }

    if (tournament.ownerId !== userId) {
      throw new ForbiddenException('Only the tournament owner can generate the bracket.');
    }

    if (tournament.status !== TournamentStatus.REGISTRATION) {
      throw new BadRequestException(
        'Tournament must be in REGISTRATION status to generate the bracket.',
      );
    }

    const participants = await this.prisma.participant.findMany({
      where: {
        tournamentId: tournament.id,
        status: 'REGISTERED',
      },
    });

    if (participants.length < 2) {
      throw new BadRequestException('At least 2 participants are required to generate a bracket.');
    }

    // Bracket Calculation
    const bracketSize = Math.pow(2, Math.ceil(Math.log2(participants.length)));
    const totalRounds = Math.log2(bracketSize);

    // Shuffle participants randomly
    const shuffled = [...participants].sort(() => Math.random() - 0.5);

    // Use transaction to ensure full generation
    return this.prisma.$transaction(async (prisma) => {
      // 1. Create Round records in DB
      const rounds = [];
      for (let i = 1; i <= totalRounds; i++) {
        const round = await prisma.round.create({
          data: {
            name: i,
            tournamentId: tournament.id,
          },
        });
        rounds.push(round);
      }

      // 2. Generate Skeleton memory objects
      const roundsMatches: any[][] = [];
      const crypto = require('crypto');

      for (let r = 0; r < totalRounds; r++) {
        const numMatches = bracketSize / Math.pow(2, r + 1);
        const currentRoundMatches = [];
        for (let i = 0; i < numMatches; i++) {
          currentRoundMatches.push({
            id: crypto.randomUUID(),
            tournamentId: tournament.id,
            roundId: rounds[r].id,
            participant1Id: null,
            participant2Id: null,
            nextMatchId: null,
            status: MatchStatus.PENDING,
            branch: `R${r + 1}-M${i + 1}`,
          });
        }
        roundsMatches.push(currentRoundMatches);
      }

      // 3. Link nextMatchId
      for (let r = 0; r < totalRounds - 1; r++) {
        const currentRound = roundsMatches[r];
        const nextRound = roundsMatches[r + 1];
        for (let i = 0; i < currentRound.length; i++) {
          const nextMatchIndex = Math.floor(i / 2);
          currentRound[i].nextMatchId = nextRound[nextMatchIndex].id;
        }
      }

      // 4. Distribute P1
      const round1Matches = roundsMatches[0];
      let pIndex = 0;
      for (let i = 0; i < round1Matches.length; i++) {
        if (pIndex < shuffled.length) {
          round1Matches[i].participant1Id = shuffled[pIndex++].id;
        }
      }

      // 5. Distribute P2
      for (let i = 0; i < round1Matches.length; i++) {
        if (pIndex < shuffled.length) {
          round1Matches[i].participant2Id = shuffled[pIndex++].id;
        }
      }

      // 6. Resolve Byes
      for (const m of round1Matches) {
        if (m.participant1Id && !m.participant2Id) {
          m.status = MatchStatus.COMPLETED;
          m.winnerId = m.participant1Id;
          m.p1Score = 1;
          m.p2Score = 0;

          if (m.nextMatchId) {
            for (const rMatches of roundsMatches) {
              const nextM = rMatches.find((x) => x.id === m.nextMatchId);
              if (nextM) {
                if (!nextM.participant1Id) {
                  nextM.participant1Id = m.winnerId;
                } else {
                  nextM.participant2Id = m.winnerId;
                }
                break; // Match found
              }
            }
          }
        }
      }

      // 7. Flatten and save all matches
      const allMatches = roundsMatches.flat();
      await prisma.match.createMany({
        data: allMatches,
      });

      // 8. Update tournament Status
      await prisma.tournament.update({
        where: { id: tournament.id },
        data: { status: TournamentStatus.SEEDING },
      });

      return { message: 'Bracket generated successfully.', bracketSize };
    });
  }

  async goLive(idOrSlug: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: { isDeleted: false, OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
    });
    if (!tournament) throw new NotFoundException(`Tournament not found.`);
    if (tournament.ownerId !== userId)
      throw new ForbiddenException('Only the tournament owner can start the tournament.');
    if (tournament.status !== TournamentStatus.SEEDING) {
      throw new BadRequestException(
        `Tournament must be in SEEDING status to go live. Current: ${tournament.status}`,
      );
    }
    return this.prisma.tournament.update({
      where: { id: tournament.id },
      data: { status: TournamentStatus.LIVE },
    });
  }

  /**
   * Bulk-seed all Round 1 matches for a tournament that is in SEEDING status.
   * Requires SEED_ADMIN or TOURNAMENT_OVERSEER role (or tournament owner).
   * Idempotent: clears existing Round 1 participant slots before re-assigning.
   */
  async seedBracket(tournamentId: string, userId: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true, status: true, bracketType: true },
    });

    if (!tournament) throw new NotFoundException(`Tournament not found.`);

    if (tournament.status !== TournamentStatus.SEEDING) {
      throw new BadRequestException(
        `Bracket seeding requires the tournament to be in SEEDING status. Current status: ${tournament.status}`,
      );
    }

    // Fetch all REGISTERED participants
    const participants = await this.prisma.participant.findMany({
      where: { tournamentId, status: 'REGISTERED' },
      orderBy: { seed: 'asc' },
    });

    if (participants.length < 2) {
      throw new BadRequestException(
        'At least 2 registered participants are required to seed the bracket.',
      );
    }

    // Fetch Round 1 (lowest round number)
    const round1 = await this.prisma.round.findFirst({
      where: { tournamentId },
      orderBy: { name: 'asc' },
    });

    if (!round1) {
      throw new BadRequestException('No rounds found. Please generate the bracket first.');
    }

    const round1Matches = await this.prisma.match.findMany({
      where: { tournamentId, roundId: round1.id },
      orderBy: { branch: 'asc' },
    });

    if (round1Matches.length === 0) {
      throw new BadRequestException('No Round 1 matches found. Please generate the bracket first.');
    }

    return this.prisma.$transaction(async (prisma) => {
      // Step 1: Clear existing participant slots in Round 1 (idempotent)
      await prisma.match.updateMany({
        where: { roundId: round1.id },
        data: {
          participant1Id: null,
          participant2Id: null,
          winnerId: null,
          status: MatchStatus.PENDING,
          draw: false,
        },
      });

      // Step 2: Assign participants into match slots sequentially
      // Fill participant1Id slots first, then participant2Id
      const slots: Array<{ matchIndex: number; slot: 'participant1Id' | 'participant2Id' }> = [];
      for (const m of round1Matches) {
        slots.push({ matchIndex: round1Matches.indexOf(m), slot: 'participant1Id' });
      }
      for (const m of round1Matches) {
        slots.push({ matchIndex: round1Matches.indexOf(m), slot: 'participant2Id' });
      }

      const slotAssignments: Record<string, { participant1Id?: string; participant2Id?: string }> =
        {};

      for (let i = 0; i < participants.length && i < slots.length; i++) {
        const { matchIndex, slot } = slots[i];
        const matchId = round1Matches[matchIndex].id;
        if (!slotAssignments[matchId]) slotAssignments[matchId] = {};
        slotAssignments[matchId][slot] = participants[i].id;
      }

      // Step 3: Persist assignments
      const updatePromises = Object.entries(slotAssignments).map(([matchId, data]) =>
        prisma.match.update({ where: { id: matchId }, data }),
      );
      await Promise.all(updatePromises);

      // Step 4: Re-fetch updated Round 1 matches to resolve byes
      const updatedRound1 = await prisma.match.findMany({
        where: { roundId: round1.id },
        orderBy: { branch: 'asc' },
      });

      const allRoundsMatches = await prisma.match.findMany({
        where: { tournamentId },
      });

      // Step 5: Auto-complete BYE matches (p1 only, no p2)
      for (const match of updatedRound1) {
        if (match.participant1Id && !match.participant2Id) {
          await prisma.match.update({
            where: { id: match.id },
            data: {
              status: MatchStatus.COMPLETED,
              winnerId: match.participant1Id,
              p1Score: 1,
              p2Score: 0,
            },
          });

          // Advance bye winner to next match
          if (match.nextMatchId) {
            const nextMatch = allRoundsMatches.find((m) => m.id === match.nextMatchId);
            if (nextMatch) {
              const slot = !nextMatch.participant1Id ? 'participant1Id' : 'participant2Id';
              await prisma.match.update({
                where: { id: nextMatch.id },
                data: { [slot]: match.participant1Id },
              });
            }
          }
        }
      }

      this.logger.log(
        `Bracket seeded for tournament ${tournamentId}: ${participants.length} participants across ${round1Matches.length} Round 1 matches.`,
      );

      // Return the full updated bracket
      return prisma.match.findMany({
        where: { tournamentId },
        include: {
          participant1: {
            include: {
              team: { select: { id: true, name: true } },
              user: { select: { id: true, discordName: true, photo: true } },
            },
          },
          participant2: {
            include: {
              team: { select: { id: true, name: true } },
              user: { select: { id: true, discordName: true, photo: true } },
            },
          },
          round: true,
        },
        orderBy: { createdAt: 'asc' },
      });
    });
  }

  /**
   * Private helper: advances the winner of a completed match to the correct
   * slot in the next match. Also routes the loser in DOUBLE_ELIMINATION brackets.
   */
  private async advanceWinner(
    match: {
      id: string;
      winnerId: string;
      participant1Id: string | null;
      participant2Id: string | null;
      nextMatchId: string | null;
      loserMoveToMatchId: string | null;
    },
    prisma: any,
    bracketType: BracketType,
  ) {
    // ── Advance winner to the winners bracket ──────────────────────────────
    if (match.nextMatchId) {
      const nextMatch = await prisma.match.findUnique({
        where: { id: match.nextMatchId },
      });

      if (nextMatch) {
        const slot = !nextMatch.participant1Id ? 'participant1Id' : 'participant2Id';
        await prisma.match.update({
          where: { id: match.nextMatchId },
          data: { [slot]: match.winnerId },
        });
        this.logger.log(
          `Winner ${match.winnerId} advanced to match ${match.nextMatchId} (slot: ${slot}).`,
        );
      }
    }

    // ── Route loser in DOUBLE_ELIMINATION ─────────────────────────────────
    if (bracketType === BracketType.DOUBLE_ELIMINATION) {
      if (!match.loserMoveToMatchId) {
        this.logger.warn(
          `DOUBLE_ELIMINATION: match ${match.id} has no loserMoveToMatchId set. ` +
            `Loser bracket routing skipped. Update the bracket generator to populate this field.`,
        );
        return;
      }

      const loserId =
        match.winnerId === match.participant1Id ? match.participant2Id : match.participant1Id;

      if (loserId) {
        const loserMatch = await prisma.match.findUnique({
          where: { id: match.loserMoveToMatchId },
        });

        if (loserMatch) {
          const slot = !loserMatch.participant1Id ? 'participant1Id' : 'participant2Id';
          await prisma.match.update({
            where: { id: match.loserMoveToMatchId },
            data: { [slot]: loserId },
          });
          this.logger.log(
            `Loser ${loserId} routed to losers-bracket match ${match.loserMoveToMatchId} (slot: ${slot}).`,
          );
        }
      }
    }
  }

  async seedMatch(
    tournamentId: string,
    matchId: string,
    userId: string,
    payload: { participant1Id?: string; participant2Id?: string },
  ) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });
    if (!tournament) throw new NotFoundException(`Tournament not found.`);

    const isSeedAdmin = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId, userId, role: TournamentRoleType.SEED_ADMIN },
    });
    if (tournament.ownerId !== userId && !isSeedAdmin) {
      throw new ForbiddenException('Only the owner or a Seed Admin can seed match slots.');
    }

    return this.prisma.match.update({
      where: { id: matchId },
      data: {
        ...(payload.participant1Id !== undefined && { participant1Id: payload.participant1Id }),
        ...(payload.participant2Id !== undefined && { participant2Id: payload.participant2Id }),
      },
      include: {
        participant1: { include: { team: { select: { id: true, name: true } } } },
        participant2: { include: { team: { select: { id: true, name: true } } } },
        round: true,
      },
    });
  }

  async openDispute(tournamentId: string, matchId: string, userId: string) {
    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      select: { tournamentId: true, status: true },
    });
    if (!match) throw new NotFoundException(`Match not found.`);
    if (match.tournamentId !== tournamentId)
      throw new BadRequestException('Match does not belong to this tournament.');

    const existing = await this.prisma.matchDispute.findFirst({
      where: { matchId, status: { not: 'RESOLVED' } },
    });
    if (existing) throw new BadRequestException('An active dispute already exists for this match.');

    return this.prisma.$transaction(async (prisma) => {
      const dispute = await prisma.matchDispute.create({
        data: { matchId, reportedById: userId },
        include: {
          reportedBy: { select: { id: true, discordName: true, displayName: true } },
        },
      });
      await prisma.match.update({ where: { id: matchId }, data: { status: 'DISPUTED' } });
      return dispute;
    });
  }

  async getDisputeByMatch(matchId: string) {
    return this.prisma.matchDispute.findFirst({
      where: { matchId },
      orderBy: { createdAt: 'desc' },
      include: {
        reportedBy: { select: { id: true, discordName: true, displayName: true, photo: true } },
        resolvedBy: { select: { id: true, discordName: true, displayName: true } },
      },
    });
  }

  async getAllDisputes(tournamentId: string, userId: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });
    if (!tournament) throw new NotFoundException('Tournament not found.');

    const isOwner = tournament.ownerId === userId;
    const staff = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId, userId }
    });
    const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { roles: true }});
    const isAdmin = user?.roles?.includes(UserRole.ADMIN) || user?.roles?.includes(UserRole.SUPER_ADMIN);

    if (!isOwner && !staff && !isAdmin) {
      throw new ForbiddenException('You do not have permission to view all disputes.');
    }

    return this.prisma.matchDispute.findMany({
      where: { match: { tournamentId } },
      orderBy: { createdAt: 'desc' },
      include: {
        match: {
          include: {
            participant1: { include: { team: { select: { name: true } } } },
            participant2: { include: { team: { select: { name: true } } } },
            round: true
          }
        },
        reportedBy: { select: { id: true, discordName: true, displayName: true, photo: true } },
        resolvedBy: { select: { id: true, discordName: true, displayName: true } },
      },
    });
  }

  async getMatchMessages(tournamentId: string, matchId: string, userId: string) {
    const match = await this.prisma.match.findUnique({ where: { id: matchId } });
    if (!match) throw new NotFoundException('Match not found');

    return this.prisma.matchMessage.findMany({
      where: { matchId },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: { select: { id: true, discordName: true, displayName: true, photo: true } },
      },
    });
  }

  async addMatchMessage(tournamentId: string, matchId: string, senderId: string, content: string) {
    const match = await this.prisma.match.findUnique({ where: { id: matchId } });
    if (!match) throw new NotFoundException('Match not found');

    return this.prisma.matchMessage.create({
      data: { matchId, senderId, content },
      include: {
        sender: { select: { id: true, discordName: true, displayName: true, photo: true } },
      },
    });
  }

  async checkInMatch(tournamentId: string, matchId: string, userId: string) {
    return this.prisma.$transaction(async (prisma) => {
      const match = await prisma.match.findUnique({
        where: { id: matchId },
        include: {
          participant1: true,
          participant2: true,
          tournament: { select: { checkInTimer: true } }
        }
      });
      if (!match) throw new NotFoundException('Match not found');

      // Determine which participant this user belongs to
      let isP1 = false;
      let isP2 = false;

      // Note: for solo, userId matches. For teams, we check if the user is in the team.
      if (match.participant1?.userId === userId) isP1 = true;
      if (match.participant2?.userId === userId) isP2 = true;

      if (!isP1 && !isP2 && match.participant1?.teamId && match.participant2?.teamId) {
        // Needs a quick query to see if user is in team
        const userT1 = await prisma.teamPlayer.findFirst({ where: { teamId: match.participant1.teamId, playerId: userId }});
        if (userT1) isP1 = true;
        const userT2 = await prisma.teamPlayer.findFirst({ where: { teamId: match.participant2.teamId, playerId: userId }});
        if (userT2) isP2 = true;
      }

      if (!isP1 && !isP2) throw new ForbiddenException('You are not a participant of this match');

      const data: any = {};
      if (isP1) {
        data.p1CheckInStatus = 'CHECKED_IN';
        data.p1CheckInAt = new Date();
      } else {
        data.p2CheckInStatus = 'CHECKED_IN';
        data.p2CheckInAt = new Date();
      }

      const p1Status = isP1 ? 'CHECKED_IN' : match.p1CheckInStatus;
      const p2Status = isP2 ? 'CHECKED_IN' : match.p2CheckInStatus;

      // If both check in now, mark matchReadyAt
      if (p1Status === 'CHECKED_IN' && p2Status === 'CHECKED_IN' && !match.matchReadyAt) {
        data.matchReadyAt = new Date();
      }
      
      return prisma.match.update({
        where: { id: matchId },
        data,
      });
    });
  }

  async reportNoShow(tournamentId: string, matchId: string, userId: string) {
    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
    });
    if (!match) throw new NotFoundException('Match not found');

    // Auto open a dispute if possible
    return this.openDispute(tournamentId, matchId, userId);
  }

  async resolveDispute(
    disputeId: string,
    resolverId: string,
    resolution: string,
    tournamentId: string,
  ) {
    const dispute = await this.prisma.matchDispute.findUnique({
      where: { id: disputeId },
      include: { match: { select: { tournamentId: true } } },
    });
    if (!dispute) throw new NotFoundException(`Dispute not found.`);
    if (dispute.status === 'RESOLVED')
      throw new BadRequestException('Dispute is already resolved.');

    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });
    const isDisputeManager = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId, userId: resolverId, role: TournamentRoleType.DISPUTE_MANAGER },
    });
    if (tournament?.ownerId !== resolverId && !isDisputeManager) {
      throw new ForbiddenException('Only the owner or a Dispute Manager can resolve disputes.');
    }

    return this.prisma.matchDispute.update({
      where: { id: disputeId },
      data: { status: 'RESOLVED', resolution, resolvedById: resolverId },
      include: {
        resolvedBy: { select: { id: true, discordName: true, displayName: true } },
      },
    });
  }

  // ---------------------------------------------------------------------------
  // TEAM REGISTRATION / JOIN FLOW
  // ---------------------------------------------------------------------------

  async joinWithParty(idOrSlug: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    if (tournament.status !== TournamentStatus.REGISTRATION) {
      throw new BadRequestException('Registration is closed.');
    }

    const partyMember = await this.prisma.partyMember.findFirst({
      where: { userId },
      include: {
        party: {
          include: { members: true },
        },
      },
    });

    if (!partyMember) throw new BadRequestException('You are not in a party.');
    if (partyMember.party.ownerId !== userId)
      throw new BadRequestException(
        'Only the party captain can register the party into a tournament.',
      );

    const memberCount = partyMember.party.members.length;
    if (memberCount < tournament.minTeamSize || memberCount > tournament.maxTeamSize) {
      throw new BadRequestException(
        `Your party has ${memberCount} members. This tournament requires between ${tournament.minTeamSize} and ${tournament.maxTeamSize} members.`,
      );
    }

    const memberIds = partyMember.party.members.map((m: any) => m.userId);

    // Check if any party member is already in a team or registered
    const existingTeamPlayer = await this.prisma.teamPlayer.findFirst({
      where: {
        playerId: { in: memberIds },
        team: { tournamentId: tournament.id, isDeleted: false },
      },
    });
    if (existingTeamPlayer)
      throw new BadRequestException(
        'A member of your party is already part of another team in this tournament.',
      );

    const existingParticipant = await this.prisma.participant.findFirst({
      where: { 
        tournamentId: tournament.id, 
        userId: { in: memberIds },
        status: { not: ParticipantStatus.CANCELLED },
      },
    });
    if (existingParticipant)
      throw new BadRequestException(
        'A member of your party is already registered in this tournament.',
      );

    // Create Team snapshot and automatically submit it
    return this.prisma.$transaction(async (prisma) => {
      const team = await prisma.team.create({
        data: {
          name: partyMember.party.name,
          tournamentId: tournament.id,
          players: {
            create: partyMember.party.members.map((m: any) => ({
              playerId: m.userId,
              role: m.role,
            })),
          },
        },
        include: { players: true },
      });

      await prisma.participant.deleteMany({
        where: {
          tournamentId: tournament.id,
          userId,
          status: ParticipantStatus.CANCELLED,
        },
      });

      const participant = await prisma.participant.create({
        data: {
          tournamentId: tournament.id,
          userId, // captain
          teamId: team.id,
          rosters: {
            create: team.players.map((tp: any) => ({
              userId: tp.playerId,
              role: tp.role,
            })),
          },
        },
        include: {
          team: {
            include: {
              players: {
                include: {
                  player: {
                    select: { id: true, discordName: true, displayName: true, photo: true },
                  },
                },
              },
            },
          },
          rosters: true,
        },
      });
      return participant;
    });
  }

  async createCustomTeam(idOrSlug: string, userId: string, name: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    if (tournament.status !== TournamentStatus.REGISTRATION) {
      throw new BadRequestException('Registration is closed.');
    }

    if (!name || name.trim() === '') {
      throw new BadRequestException('Team name is required.');
    }

    const existingMembership = await this.prisma.teamPlayer.findFirst({
      where: { playerId: userId, team: { tournamentId: tournament.id, isDeleted: false } },
    });
    if (existingMembership)
      throw new BadRequestException('You are already part of a team in this tournament.');

    const existingParticipant = await this.prisma.participant.findFirst({
      where: { 
        tournamentId: tournament.id, 
        userId,
        status: { not: ParticipantStatus.CANCELLED },
      },
    });
    if (existingParticipant)
      throw new BadRequestException('You are already registered for this tournament.');

    return this.prisma.team.create({
      data: {
        name,
        tournamentId: tournament.id,
        players: {
          create: {
            playerId: userId,
            role: TeamPlayerRole.CAPTAIN,
          },
        },
      },
      include: {
        players: {
          include: {
            player: { select: { id: true, discordName: true, displayName: true, photo: true } },
          },
        },
      },
    });
  }

  async joinExistingTeam(idOrSlug: string, teamId: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    if (tournament.status !== TournamentStatus.REGISTRATION) {
      throw new BadRequestException('Registration is closed.');
    }

    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: { players: true, participants: true },
    });

    if (!team || team.isDeleted || team.tournamentId !== tournament.id) {
      throw new NotFoundException('Team not found or is closed.');
    }

    if (team.players.length >= tournament.maxTeamSize) {
      throw new BadRequestException('This team has reached its maximum size.');
    }

    const existingMembership = await this.prisma.teamPlayer.findFirst({
      where: { playerId: userId, team: { tournamentId: tournament.id, isDeleted: false } },
    });
    if (existingMembership)
      throw new BadRequestException('You are already in a team for this tournament.');

    return this.prisma.$transaction(async (prisma) => {
      // Add to team
      const newPlayer = await prisma.teamPlayer.create({
        data: {
          teamId,
          playerId: userId,
          role: TeamPlayerRole.MEMBER,
        },
      });

      // If team is already submitted, update roster
      if (team.participants.length > 0) {
        await prisma.tournamentRoster.create({
          data: {
            participantId: team.participants[0].id,
            userId,
            role: TeamPlayerRole.MEMBER,
          },
        });
      }

      return newPlayer;
    });
  }

  /**
   * Returns a single team with its full roster and pending invite statuses.
   */
  async getTeam(idOrSlug: string, teamId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: { id: true },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: {
        players: {
          include: {
            player: {
              select: { id: true, discordName: true, displayName: true, photo: true },
            },
          },
        },
        teamPlayerRegistrations: {
          include: {
            player: {
              select: { id: true, discordName: true, displayName: true, photo: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        participants: {
          select: { id: true, status: true, checkInStatus: true },
        },
      },
    });

    if (!team || team.isDeleted || team.tournamentId !== tournament.id) {
      throw new NotFoundException('Team not found.');
    }

    return team;
  }

  /**
   * Returns the team (and roster) that the calling user currently belongs to
   * in this tournament. Returns null if the user is not on any team.
   */
  async getMyTeamInTournament(idOrSlug: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: { id: true },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    const membership = await this.prisma.teamPlayer.findFirst({
      where: {
        playerId: userId,
        team: { tournamentId: tournament.id, isDeleted: false },
      },
      include: {
        team: {
          include: {
            players: {
              include: {
                player: {
                  select: { id: true, discordName: true, displayName: true, photo: true },
                },
              },
            },
            teamPlayerRegistrations: {
              include: {
                player: {
                  select: { id: true, discordName: true, displayName: true, photo: true },
                },
              },
              orderBy: { createdAt: 'desc' },
            },
            participants: {
              select: { id: true, status: true, checkInStatus: true },
            },
          },
        },
      },
    });

    return membership ? { role: membership.role, team: membership.team } : null;
  }

  async removeTeam(idOrSlug: string, teamId: string, requesterId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: { id: true, ownerId: true },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    const isOwner = tournament.ownerId === requesterId;
    const staff = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId: tournament.id, userId: requesterId }
    });
    const user = await this.prisma.user.findUnique({ where: { id: requesterId }, select: { roles: true }});
    const isAdmin = user?.roles?.includes(UserRole.ADMIN) || user?.roles?.includes(UserRole.SUPER_ADMIN);

    if (!isOwner && !staff && !isAdmin) {
      throw new ForbiddenException('You do not have permission to remove a team.');
    }

    return this.prisma.$transaction(async (prisma) => {
      const participant = await prisma.participant.findFirst({
        where: { tournamentId: tournament.id, teamId }
      });
      if (participant) {
        await prisma.participant.update({
          where: { id: participant.id },
          data: { status: ParticipantStatus.CANCELLED }
        });
      }
      return prisma.team.update({
        where: { id: teamId },
        data: { isDeleted: true }
      });
    });
  }

  /**
   * Allows the team captain to remove an accepted member before the team
   * is submitted for the tournament.
   */
  async removeTeamMember(idOrSlug: string, teamId: string, memberId: string, requesterId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: { id: true, ownerId: true },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    const isOwner = tournament.ownerId === requesterId;
    const staff = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId: tournament.id, userId: requesterId }
    });
    const userRoleObj = await this.prisma.user.findUnique({ where: { id: requesterId }, select: { roles: true }});
    const hasAdminRole = userRoleObj?.roles?.includes(UserRole.ADMIN) || userRoleObj?.roles?.includes(UserRole.SUPER_ADMIN);
    const isAdmin = isOwner || staff || hasAdminRole;

    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: {
        players: true,
        participants: { select: { id: true } },
      },
    });

    if (!team || team.isDeleted || team.tournamentId !== tournament.id) {
      throw new NotFoundException('Team not found.');
    }

    const captainRecord = team.players.find(
      (p) => p.playerId === requesterId && p.role === TeamPlayerRole.CAPTAIN,
    );
    if (!captainRecord && !isAdmin) {
      throw new ForbiddenException('Only the team captain or an admin can remove members.');
    }

    if (team.participants.length > 0 && !isAdmin) {
      throw new BadRequestException(
        'The team has already been submitted for the tournament. The roster cannot be modified.',
      );
    }

    if (memberId === requesterId && !isAdmin) {
      throw new BadRequestException(
        'The captain cannot remove themselves. Delete the team instead.',
      );
    }

    const memberRecord = team.players.find((p) => p.playerId === memberId);
    if (!memberRecord) {
      throw new NotFoundException('This player is not a member of the team.');
    }

    return this.prisma.$transaction(async (prisma) => {
      await prisma.teamPlayer.delete({ where: { id: memberRecord.id } });

      await prisma.teamPlayerRegistration.deleteMany({
        where: { teamId, playerId: memberId },
      });

      if (team.participants.length > 0) {
        await prisma.tournamentRoster.deleteMany({
          where: {
            participant: { teamId },
            userId: memberId
          }
        });
      }

      return { message: `Player removed from team successfully.` };
    });
  }
}
