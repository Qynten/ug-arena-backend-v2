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
import { PrismaService } from '../prisma/prisma.service';
import * as crypto from 'crypto';
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
  TournamentType,
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
    const user = await this.prisma.user.findUnique({
      where: { id: ownerId },
      select: { isOwnerBlacklisted: true },
    });

    if (user?.isOwnerBlacklisted) {
      throw new ForbiddenException('Banned from Creating Tournaments');
    }

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
          randomizedSeating: createTournamentDto.randomizedSeating,
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
          participants: {
            where: { status: { not: ParticipantStatus.CANCELLED } },
            orderBy: [
              { points: 'desc' },
              { wins: 'desc' },
              { tiebreakerScore: 'desc' },
              { buchholzScore: 'desc' },
            ],
            take: 3,
            include: {
              team: { select: { name: true } },
              user: { select: { discordName: true, displayName: true } },
            },
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

    const mappedData = data.map((t) => {
      let rankings: string[] = [];
      if (t.status === 'COMPLETED' && (t as any).participants) {
        rankings = (t as any).participants.map(
          (p: any) => p.team?.name || p.user?.displayName || p.user?.discordName || 'TBA',
        );
      }
      const { ...rest } = t;
      // We can leave participants in the payload or remove it, we'll strip it cleanly here.
      delete (rest as any).participants;
      return { ...rest, rankings };
    });

    return { data: mappedData, meta: { total, page, limit } };
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
          participants: {
            where: { status: { not: ParticipantStatus.CANCELLED } },
            orderBy: [
              { points: 'desc' },
              { wins: 'desc' },
              { tiebreakerScore: 'desc' },
              { buchholzScore: 'desc' },
            ],
            take: 3,
            include: {
              team: { select: { name: true } },
              user: { select: { discordName: true, displayName: true } },
            },
          },
        },
        skip,
        take: limit,
      }),
      this.prisma.tournament.count({ where: { isDeleted: false } }),
    ]);

    const mappedData = data.map((t) => {
      let rankings: string[] = [];
      if (t.status === 'COMPLETED' && (t as any).participants) {
        rankings = (t as any).participants.map(
          (p: any) => p.team?.name || p.user?.displayName || p.user?.discordName || 'TBA',
        );
      }
      const { ...rest } = t;
      delete (rest as any).participants;
      return { ...rest, rankings };
    });

    return { data: mappedData, meta: { total, page, limit } };
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
        participants: {
          where: { status: { not: ParticipantStatus.CANCELLED } },
          include: {
            user: { select: { id: true, discordName: true, displayName: true, photo: true } },
            team: { select: { id: true, name: true } },
          },
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
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID or slug ${idOrSlug} not found.`);
    }

    return tournament;
  }

  async getRankings(idOrSlug: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: { id: true, status: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID or slug ${idOrSlug} not found.`);
    }

    if (tournament.status !== 'COMPLETED') {
      return [];
    }

    const participants = await this.prisma.participant.findMany({
      where: { tournamentId: tournament.id, status: { not: ParticipantStatus.CANCELLED } },
      orderBy: [
        { points: 'desc' },
        { wins: 'desc' },
        { tiebreakerScore: 'desc' },
        { buchholzScore: 'desc' },
      ],
      include: {
        team: { select: { name: true } },
        user: { select: { discordName: true, displayName: true } },
      },
    });

    return participants.map(
      (p) => p.team?.name || p.user?.displayName || p.user?.discordName || 'TBA',
    );
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
      // If mathematically downgrading from a post-bracket state, ensure bracket data is wiped securely
      if (rest.status && ['REGISTRATION', 'DRAFT', 'CANCELLED'].includes(rest.status)) {
        const current = await this.prisma.tournament.findUnique({ where: { id } });
        if (current && ['SEEDING', 'LIVE', 'COMPLETED'].includes(current.status)) {
          await this.prisma.match.deleteMany({ where: { tournamentId: id } });
          await this.prisma.round.deleteMany({ where: { tournamentId: id } });
          await this.prisma.participant.updateMany({
            where: { tournamentId: id },
            data: { wins: 0, losses: 0, draws: 0, points: 0, buchholzScore: 0, tiebreakerScore: 0 },
          });
        }
      }

      return await this.prisma.tournament.update({
        where: { id },
        data: {
          ...rest,
          imageMedia: imageId ? { connect: { id: imageId } } : undefined,
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
    } catch {
      throw new NotFoundException(`Cannot delete. Tournament with ID ${id} not found.`);
    }
  }

  async getBracket(idOrSlug: string) {
    try {
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

      return await this.prisma.match.findMany({
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
              },
            },
          },
          round: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
    } catch (error: any) {
      if (error instanceof NotFoundException) throw error;
      this.logger.error(
        `Failed to get bracket for tournament ${idOrSlug}: ${error?.message || 'Unknown error'}`,
      );
      return [];
    }
  }

  async validateAndUnlockMatches(tournamentId: string) {
    const matchesToValidate = await this.prisma.match.findMany({
      where: {
        tournamentId,
        status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
        participant1Id: { not: null },
        participant2Id: { not: null },
      },
      include: { round: true },
    });

    if (matchesToValidate.length === 0) return;

    for (const m of matchesToValidate) {
      const p1Blocking = await this.prisma.match.findFirst({
        where: {
          tournamentId,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant1Id }, { participant2Id: m.participant1Id }],
          round: { name: { lt: m.round.name } },
        },
      });

      const p2Blocking = await this.prisma.match.findFirst({
        where: {
          tournamentId,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant2Id }, { participant2Id: m.participant2Id }],
          round: { name: { lt: m.round.name } },
        },
      });

      const isBlocked = !!(p1Blocking || p2Blocking);

      if (isBlocked && m.unlockedAt !== null) {
        await this.prisma.match.update({
          where: { id: m.id },
          data: { unlockedAt: null },
        });
      } else if (!isBlocked && m.unlockedAt === null) {
        await this.prisma.match.update({
          where: { id: m.id },
          data: { unlockedAt: new Date() },
        });
      }
    }
  }

  private async recalculateBuchholz(tournamentId: string) {
    const participants = await this.prisma.participant.findMany({
      where: { tournamentId },
      include: {
        matchHistories: true,
      },
    });

    if (participants.length === 0) return;

    const participantMap = new Map(participants.map((p) => [p.id, p]));

    for (const p of participants) {
      let buchholzScore = 0;

      // Find all unique opponents this participant has faced
      const uniqueOpponentIds = new Set(
        p.matchHistories.filter((mh) => mh.opponentId).map((mh) => mh.opponentId),
      );

      for (const oppId of uniqueOpponentIds) {
        const opp = participantMap.get(oppId);
        if (opp) {
          // Standard Buchholz: Sum of the final scores of all faced opponents.
          // Using points, falling back to wins if points aren't actively populated.
          buchholzScore += opp.points || opp.wins || 0;
        }
      }

      await this.prisma.participant.update({
        where: { id: p.id },
        data: { buchholzScore },
      });
    }
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

    const result = await this.prisma.$transaction(async (prisma) => {
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
        // FIRST: Revert previous tallies to prevent mathematical infinite-stacking on rapid edits
        if (match.status === 'COMPLETED') {
          if (match.draw) {
            await prisma.participant.update({
              where: { id: match.participant1Id },
              data: { draws: { decrement: 1 } },
            });
            await prisma.participant.update({
              where: { id: match.participant2Id },
              data: { draws: { decrement: 1 } },
            });
          } else if (match.winnerId) {
            const oldLoserId =
              match.winnerId === match.participant1Id ? match.participant2Id : match.participant1Id;
            await prisma.participant.update({
              where: { id: match.winnerId },
              data: { wins: { decrement: 1 } },
            });
            if (oldLoserId) {
              await prisma.participant.update({
                where: { id: oldLoserId },
                data: { losses: { decrement: 1 } },
              });
            }
          }
        }

        // SECOND: Apply the new incoming tallies safely
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

    await this.validateAndUnlockMatches(tournamentId);
    await this.recalculateBuchholz(tournamentId);

    return result;
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
            orderBy: { role: 'asc' },
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
    try {
      const fetchedTournament = await this.prisma.tournament.findFirst({
        where: {
          isDeleted: false,
          OR: [{ id: idOrSlug }, { slug: idOrSlug }],
        },
      });

      if (!fetchedTournament) {
        throw new NotFoundException(`Tournament not found.`);
      }

      const tournament = fetchedTournament!;

      if (tournament.ownerId !== userId) {
        throw new ForbiddenException('Only the tournament owner can generate the bracket.');
      }

      if (tournament.status !== TournamentStatus.REGISTRATION) {
        throw new BadRequestException(
          'Tournament must be in REGISTRATION status to generate the bracket.',
        );
      }

      await this.prisma.$transaction(async (prisma) => {
        // 0. Clean up any existing bracket data (allows safe regeneration if status was manually reset)
        await prisma.match.deleteMany({ where: { tournamentId: tournament.id } });
        await prisma.round.deleteMany({ where: { tournamentId: tournament.id } });
        await prisma.participant.updateMany({
          where: { tournamentId: tournament.id },
          data: { wins: 0, losses: 0, draws: 0, points: 0, buchholzScore: 0, tiebreakerScore: 0 },
        });

        // --- SEEDING PRE-FLIGHT: SOLO QUEUE AUTO-FILL & EMPTY TEAM GENERATION ---
        if (tournament.type === TournamentType.TEAM) {
          if (tournament.randomizedSeating) {
            const solos = await prisma.participant.findMany({
              where: {
                tournamentId: tournament.id,
                teamId: null,
                status: ParticipantStatus.REGISTERED,
              },
              include: { user: true },
            });

            if (solos.length > 0) {
              // Fetch ALL teams in the tournament
              const allTeams = await prisma.team.findMany({
                where: { tournamentId: tournament.id, isDeleted: false },
                include: { players: true },
              });

              // Filter teams that actually have an open slot
              const maxCapacity = tournament.maxTeamSize + (tournament.allowSubstitutions ? 1 : 0);
              const openTeams = allTeams.filter((t) => t.players.length < maxCapacity);

              // 1. Fill existing open teams
              for (const team of openTeams) {
                let currentSize = team.players.length;
                let addedSolos = false;
                while (currentSize < maxCapacity && solos.length > 0) {
                  const soloParticipant = solos.shift()!;
                  await prisma.teamPlayer.create({
                    data: {
                      teamId: team.id,
                      playerId: soloParticipant.userId!,
                      role: TeamPlayerRole.MEMBER,
                    },
                  });
                  await prisma.participant.delete({ where: { id: soloParticipant.id } }); // Remove solo participant record
                  currentSize++;
                  addedSolos = true;
                }

                // If we injected solo players into this team, forcefully register/update them as participants!
                if (addedSolos) {
                  const newPlayers = await prisma.teamPlayer.findMany({
                    where: { teamId: team.id },
                  });

                  // Ensure we don't violate unique teamId constraint if a cancelled participant record already exists
                  await prisma.participant.deleteMany({
                    where: { tournamentId: tournament.id, teamId: team.id },
                  });

                  await prisma.participant.create({
                    data: {
                      tournamentId: tournament.id,
                      userId:
                        newPlayers.find((p) => p.role === TeamPlayerRole.CAPTAIN)?.playerId ||
                        newPlayers[0].playerId,
                      teamId: team.id,
                      status: ParticipantStatus.REGISTERED, // Ensure it's active
                      rosters: {
                        create: newPlayers.map((p) => ({
                          userId: p.playerId,
                          role: p.role,
                        })),
                      },
                    },
                  });
                }
              }

              // 2. Form new randomized teams from remaining solos
              const currentTotalTeamsCount = await prisma.participant.count({
                where: {
                  tournamentId: tournament.id,
                  status: ParticipantStatus.REGISTERED,
                  teamId: { not: null },
                },
              });

              let teamsToCreate = 0;
              if (solos.length > 0) {
                const spotsAvailable = tournament.maxParticipants - currentTotalTeamsCount;
                const possibleTeams = Math.ceil(solos.length / maxCapacity);
                teamsToCreate = Math.min(spotsAvailable, possibleTeams);
              }

              for (let i = 0; i < teamsToCreate; i++) {
                const size = Math.min(solos.length, maxCapacity);
                const teamSolos = solos.splice(0, size);

                const randomTeamName = `Arena Squad ${Math.floor(Math.random() * 10000)}`;
                const newTeam = await prisma.team.create({
                  data: {
                    name: randomTeamName,
                    tournamentId: tournament.id,
                    players: {
                      create: teamSolos.map((s, idx) => ({
                        playerId: s.userId!,
                        role: idx === 0 ? TeamPlayerRole.CAPTAIN : TeamPlayerRole.MEMBER,
                      })),
                    },
                  },
                });

                for (const s of teamSolos) {
                  await prisma.participant.delete({ where: { id: s.id } }); // Remove solo participant record
                }

                await prisma.participant.create({
                  data: {
                    tournamentId: tournament.id,
                    userId: teamSolos[0].userId!, // Direct use avoids undefined indexing from generated includes
                    teamId: newTeam.id,
                    status: ParticipantStatus.REGISTERED,
                    rosters: {
                      create: teamSolos.map((s, idx) => ({
                        userId: s.userId!,
                        role: idx === 0 ? TeamPlayerRole.CAPTAIN : TeamPlayerRole.MEMBER,
                      })),
                    },
                  },
                });
              }

              // 3. Any solos STILL remaining are cancelled.
              for (const s of solos) {
                await prisma.participant.update({
                  where: { id: s.id },
                  data: { status: ParticipantStatus.CANCELLED },
                });
              }
            }
          } else {
            // Organizer Seating: Only generate empty teams to match maxParticipants
            const currentTotalTeamsCount = await prisma.participant.count({
              where: {
                tournamentId: tournament.id,
                status: ParticipantStatus.REGISTERED,
                teamId: { not: null },
              },
            });

            const spotsAvailable = tournament.maxParticipants - currentTotalTeamsCount;
            for (let i = 0; i < spotsAvailable; i++) {
              const newTeam = await prisma.team.create({
                data: {
                  name: `TBD Squad ${Math.floor(Math.random() * 10000)}`,
                  tournamentId: tournament.id,
                },
              });
              await prisma.participant.create({
                data: {
                  tournamentId: tournament.id,
                  teamId: newTeam.id,
                  status: ParticipantStatus.REGISTERED,
                },
              });
            }
          }
        }
      }); // End of Pre-Flight Transaction

      // Fetch the final list of valid participants for bracket generation
      const participants = await this.prisma.participant.findMany({
        where: {
          tournamentId: tournament.id,
          status: ParticipantStatus.REGISTERED,
          ...(tournament.type === TournamentType.TEAM ? { teamId: { not: null } } : {}),
        },
      });

      if (participants.length < 2) {
        throw new BadRequestException(
          'At least 2 participants are required to generate a bracket.',
        );
      }

      // Bracket Calculation
      const bracketSize = Math.pow(2, Math.ceil(Math.log2(participants.length)));
      const totalRounds = Math.log2(bracketSize);

      // Shuffle participants randomly
      const shuffled = [...participants].sort(() => Math.random() - 0.5);

      // Use transaction to ensure full generation
      const transactionResult = await this.prisma.$transaction(async (prisma) => {
        if (
          tournament.bracketType === 'SINGLE_ELIMINATION' ||
          tournament.bracketType === 'DOUBLE_ELIMINATION'
        ) {
          // 1. Create Round records in DB
          const wRoundsData = [];
          for (let i = 1; i <= totalRounds; i++) {
            wRoundsData.push(
              await prisma.round.create({ data: { name: i, tournamentId: tournament.id } }),
            );
          }

          const lRoundsData: any[] = [];
          let lRoundsCount = 0;
          if (tournament.bracketType === 'DOUBLE_ELIMINATION') {
            lRoundsCount = Math.max(0, 2 * totalRounds - 2);
            for (let i = 1; i <= lRoundsCount; i++) {
              lRoundsData.push(
                await prisma.round.create({ data: { name: i, tournamentId: tournament.id } }),
              );
            }
          }

          let gfRound = null;
          if (tournament.bracketType === 'DOUBLE_ELIMINATION') {
            gfRound = await prisma.round.create({ data: { name: 1, tournamentId: tournament.id } });
          }

          const wMatches: any[][] = [];
          const lMatches: any[][] = [];
          const gfMatches: any[] = [];

          // W MATCHES
          for (let r = 0; r < totalRounds; r++) {
            const numMatches = bracketSize / Math.pow(2, r + 1);
            const roundArr = [];
            for (let i = 0; i < numMatches; i++) {
              roundArr.push({
                id: crypto.randomUUID(),
                tournamentId: tournament.id,
                roundId: wRoundsData[r].id,
                participant1Id: null,
                participant2Id: null,
                nextMatchId: null,
                loserMoveToMatchId: null,
                status: 'PENDING',
                branch: 'WINNERS',
              });
            }
            wMatches.push(roundArr);
          }

          // L MATCHES
          if (tournament.bracketType === 'DOUBLE_ELIMINATION' && lRoundsCount > 0) {
            for (let i = 0; i < lRoundsCount; i++) {
              const numMatches = bracketSize / Math.pow(2, Math.floor(i / 2) + 2);
              const roundArr = [];
              for (let j = 0; j < numMatches; j++) {
                roundArr.push({
                  id: crypto.randomUUID(),
                  tournamentId: tournament.id,
                  roundId: lRoundsData[i].id,
                  participant1Id: null,
                  participant2Id: null,
                  nextMatchId: null,
                  loserMoveToMatchId: null,
                  status: 'PENDING',
                  branch: 'LOSERS',
                });
              }
              lMatches.push(roundArr);
            }

            // GF Matches
            gfMatches.push({
              id: crypto.randomUUID(),
              tournamentId: tournament.id,
              roundId: gfRound!.id,
              participant1Id: null,
              participant2Id: null,
              nextMatchId: null,
              loserMoveToMatchId: null,
              status: 'PENDING',
              branch: 'GRAND_FINALS',
            });
            if (tournament.hasGrandFinalRematch) {
              gfMatches.push({
                id: crypto.randomUUID(),
                tournamentId: tournament.id,
                roundId: gfRound!.id,
                participant1Id: null,
                participant2Id: null,
                nextMatchId: null,
                loserMoveToMatchId: null,
                status: 'PENDING',
                branch: 'GRAND_FINALS_RESET',
              });
              // Link GF 1 to GF 2 (Both the Winner and Loser advance IF the loser survives)
              gfMatches[0].nextMatchId = gfMatches[1].id;
              gfMatches[0].loserMoveToMatchId = gfMatches[1].id;
            }
          }

          // 3. Link nextMatchId & loserMoveToMatchId
          // W-Bracket next links
          for (let r = 0; r < totalRounds - 1; r++) {
            for (let i = 0; i < wMatches[r].length; i++) {
              wMatches[r][i].nextMatchId = wMatches[r + 1][Math.floor(i / 2)].id;
            }
          }

          if (tournament.bracketType === 'DOUBLE_ELIMINATION' && lRoundsCount > 0) {
            // L-Bracket next links
            // L-Bracket next links
            for (let i = 0; i < lRoundsCount - 1; i++) {
              for (let j = 0; j < lMatches[i].length; j++) {
                lMatches[i][j].nextMatchId = lMatches[i + 1][Math.floor(j / 2)].id;
              }
            }

            // W-Bracket to L-Bracket links
            for (let r = 0; r < totalRounds; r++) {
              if (r === 0) {
                // W-Round 0 drops to L-Round 0
                for (let j = 0; j < wMatches[r].length; j++) {
                  wMatches[r][j].loserMoveToMatchId = lMatches[0][Math.floor(j / 2)].id;
                }
              } else {
                // W-Round r drops to L-Round 2r - 1
                const lRoundIndex = 2 * r - 1;
                if (lRoundIndex < lRoundsCount) {
                  const numMatches = wMatches[r].length;

                  // For W-Finals (last round that drops), it maps 1:1 into L-Finals
                  if (numMatches === 1 && lMatches[lRoundIndex].length === 1) {
                    wMatches[r][0].loserMoveToMatchId = lMatches[lRoundIndex][0].id;
                  } else {
                    // Parallel drop: 2:1 into the SECOND HALF of the L-Round.
                    const offset = lMatches[lRoundIndex].length / 2;
                    for (let j = 0; j < numMatches; j++) {
                      wMatches[r][j].loserMoveToMatchId =
                        lMatches[lRoundIndex][offset + Math.floor(j / 2)].id;
                    }
                  }
                }
              }
            }

            // W-Bracket final and L-Bracket final to Grand Finals
            wMatches[totalRounds - 1][0].nextMatchId = gfMatches[0].id;
            lMatches[lRoundsCount - 1][0].nextMatchId = gfMatches[0].id;
          }

          // 4. Distribute Participants
          if (tournament.randomizedSeating) {
            const round1Matches = wMatches[0];
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
          }

          // 6. DB Saving
          const allMatches = [...wMatches.flat(), ...lMatches.flat(), ...gfMatches];
          await prisma.match.createMany({
            data: allMatches,
          });

          // 7. Auto-Resolve BYEs via database transactions
          if (tournament.randomizedSeating) {
            const createdMatches = await prisma.match.findMany({
              where: { tournamentId: tournament.id, roundId: wRoundsData[0].id, branch: 'WINNERS' },
            });

            for (const m of createdMatches) {
              if (m.participant1Id && !m.participant2Id) {
                await prisma.match.update({
                  where: { id: m.id },
                  data: { status: 'COMPLETED', winnerId: m.participant1Id, p1Score: 1, p2Score: 0 },
                });
                await this.advanceWinner(
                  {
                    id: m.id,
                    winnerId: m.participant1Id,
                    participant1Id: m.participant1Id,
                    participant2Id: null,
                    nextMatchId: m.nextMatchId,
                    loserMoveToMatchId: m.loserMoveToMatchId,
                  },
                  prisma,
                  tournament.bracketType,
                );
              }
            }
          }
        } else if (tournament.bracketType === 'SWISS') {
          const numRounds = Math.ceil(Math.log2(participants.length)) || 1;
          const matchesPerRound = Math.floor(participants.length / 2);

          const roundRecords: any[] = [];
          for (let i = 1; i <= numRounds; i++) {
            roundRecords.push(
              await prisma.round.create({ data: { name: i, tournamentId: tournament.id } }),
            );
          }

          const sMatches: any[] = [];
          for (let r = 0; r < numRounds; r++) {
            for (let i = 0; i < matchesPerRound; i++) {
              sMatches.push({
                id: crypto.randomUUID(),
                tournamentId: tournament.id,
                roundId: roundRecords[r].id,
                participant1Id: null,
                participant2Id: null,
                nextMatchId: null,
                loserMoveToMatchId: null,
                status: 'PENDING',
                branch: 'SWISS',
              });
            }
          }

          // Distribute Round 1 participants mapped by seeds
          if (tournament.randomizedSeating) {
            let pIndex = 0;
            const round1Matches = sMatches.filter((m) => m.roundId === roundRecords[0].id);
            for (let i = 0; i < round1Matches.length; i++) {
              if (pIndex < participants.length)
                round1Matches[i].participant1Id = participants[pIndex++].id;
              if (pIndex < participants.length)
                round1Matches[i].participant2Id = participants[pIndex++].id;
            }
          }

          await prisma.match.createMany({ data: sMatches });

          // Resolve BYE if participants is odd natively
          if (tournament.randomizedSeating) {
            const createdR1 = await prisma.match.findMany({
              where: { tournamentId: tournament.id, roundId: roundRecords[0].id },
            });
            for (const m of createdR1) {
              if (m.participant1Id && !m.participant2Id) {
                await prisma.match.update({
                  where: { id: m.id },
                  data: { status: 'COMPLETED', winnerId: m.participant1Id, p1Score: 1, p2Score: 0 },
                });
              }
            }
          }
        } else if (tournament.bracketType === 'ROUND_ROBIN') {
          const N = participants.length;
          const rounds = N % 2 === 0 ? N - 1 : N;

          const dummyArray = [...participants];
          if (N % 2 !== 0) dummyArray.push({ id: 'BYE' } as any);

          const numTeams = dummyArray.length;
          const roundRecords: any[] = [];
          for (let i = 1; i <= rounds; i++) {
            roundRecords.push(
              await prisma.round.create({ data: { name: i, tournamentId: tournament.id } }),
            );
          }

          const rrMatches: any[] = [];
          for (let r = 0; r < rounds; r++) {
            for (let i = 0; i < numTeams / 2; i++) {
              let p1Id = null;
              let p2Id = null;

              if (tournament.randomizedSeating) {
                const p1 = dummyArray[i];
                const p2 = dummyArray[numTeams - 1 - i];
                // Skip BYE matches in DB
                if (p1.id === 'BYE' || p2.id === 'BYE') continue;

                p1Id = p1.id;
                p2Id = p2.id;
              }

              rrMatches.push({
                id: crypto.randomUUID(),
                tournamentId: tournament.id,
                roundId: roundRecords[r].id,
                participant1Id: p1Id,
                participant2Id: p2Id,
                nextMatchId: null,
                loserMoveToMatchId: null,
                status: 'PENDING',
                branch: 'ROUND_ROBIN',
              });
            }
            dummyArray.splice(1, 0, dummyArray.pop()!);
          }
          await prisma.match.createMany({ data: rrMatches });
        }

        // 8. Update tournament Status
        await prisma.tournament.update({
          where: { id: tournament.id },
          data: { status: TournamentStatus.SEEDING },
        });

        return { message: 'Bracket generated successfully.', bracketSize };
      });
      return transactionResult;
    } catch (err: any) {
      throw err;
    }
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

    const result = await this.prisma.$transaction(async (tx) => {
      const updatedTournament = await tx.tournament.update({
        where: { id: tournament.id },
        data: { status: TournamentStatus.LIVE },
      });

      return updatedTournament;
    });

    await this.validateAndUnlockMatches(tournament.id);

    return result;
  }

  /**
   * Bulk-seed all Round 1 matches for a tournament that is in SEEDING status.
   * Requires SEED_ADMIN or TOURNAMENT_OVERSEER role (or tournament owner).
   * Idempotent: clears existing Round 1 participant slots before re-assigning.
   */
  async seedBracket(tournamentId: string) {
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
        // Find the 'old default winner' to cleanly overwrite them if this is a retrospective correction.
        const oldWinnerId =
          match.winnerId === match.participant1Id ? match.participant2Id : match.participant1Id;
        let slot = !nextMatch.participant1Id ? 'participant1Id' : 'participant2Id';

        if (nextMatch.participant1Id === oldWinnerId) {
          slot = 'participant1Id';
        } else if (nextMatch.participant2Id === oldWinnerId) {
          slot = 'participant2Id';
        } else if (!nextMatch.participant1Id) {
          slot = 'participant1Id';
        } else if (!nextMatch.participant2Id) {
          slot = 'participant2Id';
        }

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
        // Special Double Elimination Trap Event: GRAND FINALS Bracket Reset Evaluation
        const currentMatchContext = await prisma.match.findUnique({ where: { id: match.id } });
        if (currentMatchContext?.branch === 'GRAND_FINALS') {
          const loserRecord = await prisma.participant.findUnique({ where: { id: loserId } });

          // If the incoming loser natively logs 2 distinct physical Postgres losses here, it mathematically
          // proves they were the Losers Bracket survivor. Ergo, their subsequent Grand Finals defeat is a terminal double elimination
          // event. The tournament is mathematically concluded and the Rematch match sequence is permanently aborted.
          if (loserRecord && loserRecord.losses >= 2) {
            this.logger.log(
              `Terminal double-elimination concluded in Grand Finals for Participant ${loserId}. Aborting Rematch sequence.`,
            );
            if (match.nextMatchId) {
              await prisma.match.delete({
                where: { id: match.nextMatchId },
              });
            }
            return; // Do NOT advance the loser OR the winner any further! Event finalized.
          }
        }

        const loserMatch = await prisma.match.findUnique({
          where: { id: match.loserMoveToMatchId },
        });

        if (loserMatch) {
          // If this is an outcome correction, the new winner *used* to be the recorded loser and is sitting in this match!
          const oldLoserId = match.winnerId;
          let slot = !loserMatch.participant1Id ? 'participant1Id' : 'participant2Id';

          if (loserMatch.id === match.nextMatchId) {
            // GRAND FINALS RESET trap: The winner was just placed in this exact match in the previous step.
            // Ensure the loser goes into the opposite slot.
            slot =
              loserMatch.participant1Id === match.winnerId ? 'participant2Id' : 'participant1Id';
          } else if (loserMatch.participant1Id === oldLoserId) {
            slot = 'participant1Id';
          } else if (loserMatch.participant2Id === oldLoserId) {
            slot = 'participant2Id';
          } else if (!loserMatch.participant1Id) {
            slot = 'participant1Id';
          } else if (!loserMatch.participant2Id) {
            slot = 'participant2Id';
          }

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

    // ── Dynamic SWISS Round Generation ─────────────────────────────────
    if (bracketType === BracketType.SWISS) {
      const mDetails = await prisma.match.findUnique({
        where: { id: match.id },
        select: { roundId: true, tournamentId: true, round: { select: { name: true } } },
      });

      if (mDetails) {
        const roundMatches = await prisma.match.findMany({
          where: { tournamentId: mDetails.tournamentId, roundId: mDetails.roundId },
        });

        const allCompleted = roundMatches.every((m: any) => m.status === 'COMPLETED');
        if (allCompleted && roundMatches.length > 0) {
          // Retrieve the next round
          const nextRoundName = Number(mDetails.round.name) + 1;
          const nextRound = await prisma.round.findFirst({
            where: { tournamentId: mDetails.tournamentId, name: nextRoundName },
          });

          if (nextRound) {
            const participantsPool = await prisma.participant.findMany({
              where: { tournamentId: mDetails.tournamentId },
              orderBy: [{ wins: 'desc' }, { losses: 'asc' }],
            });

            const nextRoundMatches = await prisma.match.findMany({
              where: { tournamentId: mDetails.tournamentId, roundId: nextRound.id },
              orderBy: { createdAt: 'asc' },
            });

            let pIndex = 0;
            for (const nrMatch of nextRoundMatches) {
              if (pIndex < participantsPool.length) {
                await prisma.match.update({
                  where: { id: nrMatch.id },
                  data: {
                    participant1Id: participantsPool[pIndex++].id,
                    participant2Id:
                      pIndex < participantsPool.length ? participantsPool[pIndex++].id : null,
                  },
                });
              }
            }

            // Auto-resolve bye
            const updatedNextRoundMatches = await prisma.match.findMany({
              where: { tournamentId: mDetails.tournamentId, roundId: nextRound.id },
            });
            for (const m of updatedNextRoundMatches) {
              if (m.participant1Id && !m.participant2Id) {
                await prisma.match.update({
                  where: { id: m.id },
                  data: { status: 'COMPLETED', winnerId: m.participant1Id, p1Score: 1, p2Score: 0 },
                });
              }
            }
            this.logger.log(
              `SWISS Round ${nextRoundName} auto-generated based on standings records.`,
            );
          }
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

    return this.prisma.$transaction(async (tx) => {
      const currentMatch = await tx.match.findUnique({
        where: { id: matchId },
        include: { round: true },
      });

      if (!currentMatch) throw new NotFoundException('Match not found');

      // Helper function to safely swap incoming participant with whatever currently occupies this match slot
      const handleSwap = async (
        incomingId: string | null,
        slot: 'participant1Id' | 'participant2Id',
      ) => {
        if (!incomingId) return;

        // Is this participant already in another match in this exact same round?
        const conflictingMatch = await tx.match.findFirst({
          where: {
            tournamentId,
            roundId: currentMatch.roundId,
            id: { not: matchId },
            OR: [{ participant1Id: incomingId }, { participant2Id: incomingId }],
          },
        });

        if (conflictingMatch) {
          // Swap them with whoever was currently in this slot in our target match
          const originalParticipantId = currentMatch[slot];
          const conflictingSlot =
            conflictingMatch.participant1Id === incomingId ? 'participant1Id' : 'participant2Id';

          await tx.match.update({
            where: { id: conflictingMatch.id },
            data: { [conflictingSlot]: originalParticipantId },
          });
        }
      };

      if (
        payload.participant1Id !== undefined &&
        payload.participant1Id !== currentMatch.participant1Id
      ) {
        await handleSwap(payload.participant1Id, 'participant1Id');
      }

      if (
        payload.participant2Id !== undefined &&
        payload.participant2Id !== currentMatch.participant2Id
      ) {
        await handleSwap(payload.participant2Id, 'participant2Id');
      }

      return tx.match.update({
        where: { id: matchId },
        data: {
          ...(payload.participant1Id !== undefined
            ? { participant1Id: payload.participant1Id }
            : {}),
          ...(payload.participant2Id !== undefined
            ? { participant2Id: payload.participant2Id }
            : {}),
        },
        include: {
          participant1: {
            include: {
              team: { select: { id: true, name: true } },
              user: { select: { id: true, discordName: true, displayName: true } },
            },
          },
          participant2: {
            include: {
              team: { select: { id: true, name: true } },
              user: { select: { id: true, discordName: true, displayName: true } },
            },
          },
          round: true,
        },
      });
    });
  }

  async openDispute(
    tournamentId: string,
    matchId: string,
    userId: string,
    reason?: string,
    context?: string,
  ) {
    const [match, tournament] = await Promise.all([
      this.prisma.match.findUnique({
        where: { id: matchId },
        select: { tournamentId: true, status: true },
      }),
      this.prisma.tournament.findUnique({
        where: { id: tournamentId },
        select: { name: true, ownerId: true },
      }),
    ]);

    if (!match) throw new NotFoundException(`Match not found.`);
    if (match.tournamentId !== tournamentId)
      throw new BadRequestException('Match does not belong to this tournament.');

    // Removed the active dispute existence block to allow multiple users to file independent dispute requests.

    const dispute = await this.prisma.$transaction(async (prisma) => {
      const d = await prisma.matchDispute.create({
        data: { matchId, reportedById: userId, reason, context },
        include: {
          reportedBy: { select: { id: true, discordName: true, displayName: true } },
        },
      });
      await prisma.match.update({ where: { id: matchId }, data: { status: 'DISPUTED' } });
      return d;
    });

    try {
      const staff = await this.prisma.tournamentStaff.findMany({
        where: {
          tournamentId,
          role: { in: ['MODERATOR', 'DISPUTE_MANAGER', 'TOURNAMENT_OVERSEER', 'DRAFT_ADMIN'] },
        },
        select: { userId: true },
      });
      const staffIds = staff.map((s) => s.userId);
      const userIds = [...new Set([...staffIds, tournament?.ownerId])].filter(Boolean) as string[];

      if (userIds.length > 0) {
        const matchNumber = await this.resolveMatchNumber(tournamentId, matchId);
        await this.notificationsService.createMany(
          userIds.map((uid) => ({
            userId: uid,
            type: NotificationType.ADMIN_CALL,
            title: `Match Dispute Triggered`,
            message: `${dispute.reportedBy?.displayName || dispute.reportedBy?.discordName || 'A player'} reported a dispute in Match #${matchNumber} inside "${tournament?.name}".`,
            payload: { tournamentId, matchId },
          })),
        );
      }
    } catch (e) {
      console.error('Failed to notify staff of match dispute', e);
    }

    await this.validateAndUnlockMatches(tournamentId);

    return dispute;
  }

  /**
   * Evaluates the ordered position of a match inside a structural bracket block
   * to align notifications with front-facing Match numbers.
   */
  private async resolveMatchNumber(tournamentId: string, matchId: string): Promise<string> {
    const allMatches = await this.prisma.match.findMany({
      where: { tournamentId },
      include: { round: true },
    });

    const isSwissOrRR = allMatches.some((m) => m.branch === 'SWISS' || m.branch === 'ROUND_ROBIN');
    if (isSwissOrRR) {
      allMatches.sort((a, b) => {
        const rA = Number(a.round?.name || a.roundId || 1);
        const rB = Number(b.round?.name || b.roundId || 1);
        if (rA !== rB) return rA - rB;
        return (a.participant1Id || '').localeCompare(b.participant1Id || '');
      });
      const index = allMatches.findIndex((m) => m.id === matchId);
      return index !== -1 ? `${index + 1}` : matchId.slice(-4).toUpperCase();
    }

    const branchOrder = [
      'WINNERS',
      'LOSERS',
      'GRAND_FINALS',
      'GRAND_FINALS_RESET',
      'SINGLE_ELIMINATION',
    ];
    const branches: Record<string, any[]> = {};
    allMatches.forEach((m) => {
      const b = m.branch || 'WINNERS';
      if (!branches[b]) branches[b] = [];
      branches[b].push(m);
    });

    const alignedMatches: any[] = [];
    for (const b of branchOrder) {
      if (!branches[b]) continue;
      const rGroups: Record<number, any[]> = {};
      branches[b].forEach((m) => {
        const r = Number(m.round?.name || m.roundId || 0);
        if (!rGroups[r]) rGroups[r] = [];
        rGroups[r].push(m);
      });

      const rounds = Object.keys(rGroups)
        .map(Number)
        .sort((x, y) => y - x);
      rounds.forEach((r) => {
        rGroups[r].sort((x, y) => (x.id < y.id ? -1 : x.id > y.id ? 1 : 0));
      });

      for (let i = 0; i < rounds.length - 1; i++) {
        const currentR = rounds[i];
        const prevR = rounds[i + 1];
        const alignedPrevRound: any[] = [];
        rGroups[currentR].forEach((target) => {
          const feeders = rGroups[prevR].filter((m: any) => m.nextMatchId === target.id);
          alignedPrevRound.push(...feeders);
        });
        const orphans = rGroups[prevR].filter((m: any) => !m.nextMatchId);
        alignedPrevRound.push(...orphans);
        rGroups[prevR] = alignedPrevRound;
      }

      for (const r of [...rounds].reverse()) {
        alignedMatches.push(...rGroups[r]);
      }
    }

    const capturedIDs = new Set(alignedMatches.map((m) => m.id));
    allMatches.forEach((m) => {
      if (!capturedIDs.has(m.id)) alignedMatches.push(m);
    });

    const idx = alignedMatches.findIndex((m) => m.id === matchId);
    return idx !== -1 ? `${idx + 1}` : matchId.slice(-4).toUpperCase();
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
      where: { tournamentId, userId },
    });
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { roles: true },
    });
    const isAdmin =
      user?.roles?.includes(UserRole.ADMIN) || user?.roles?.includes(UserRole.SUPER_ADMIN);

    if (!isOwner && !staff && !isAdmin) {
      throw new ForbiddenException('You do not have permission to view all disputes.');
    }

    return this.prisma.matchDispute.findMany({
      where: { match: { tournamentId } },
      orderBy: { createdAt: 'desc' },
      include: {
        match: {
          include: {
            participant1: {
              include: {
                user: true,
                team: { include: { players: { include: { player: true } } } },
              },
            },
            participant2: {
              include: {
                user: true,
                team: { include: { players: { include: { player: true } } } },
              },
            },
            round: true,
          },
        },
        reportedBy: { select: { id: true, discordName: true, displayName: true, photo: true } },
        resolvedBy: { select: { id: true, discordName: true, displayName: true } },
      },
    });
  }

  async getMatchMessages(tournamentId: string, matchId: string) {
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
          tournament: { select: { checkInTimer: true } },
        },
      });
      if (!match) throw new NotFoundException('Match not found');

      // Determine which participant this user belongs to
      let isP1 = false;
      let isP2 = false;

      // Note: for solo, userId matches. For teams, we check if the user is in the team.
      if (match.participant1?.userId === userId) isP1 = true;
      if (match.participant2?.userId === userId) isP2 = true;

      if (!isP1 && !isP2 && (match.participant1?.teamId || match.participant2?.teamId)) {
        if (match.participant1?.teamId) {
          const userT1 = await prisma.teamPlayer.findFirst({
            where: { teamId: match.participant1.teamId, playerId: userId },
          });
          if (userT1 && userT1.role === 'CAPTAIN') isP1 = true;
        }
        if (match.participant2?.teamId) {
          const userT2 = await prisma.teamPlayer.findFirst({
            where: { teamId: match.participant2.teamId, playerId: userId },
          });
          if (userT2 && userT2.role === 'CAPTAIN') isP2 = true;
        }
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

  async adminCheckIn(tournamentId: string, matchId: string, userId: string, teamNum: 1 | 2) {
    return this.prisma.$transaction(async (prisma) => {
      const match = await prisma.match.findUnique({
        where: { id: matchId },
        include: { tournament: { select: { ownerId: true } } },
      });
      if (!match) throw new NotFoundException('Match not found');

      const isOwner = match.tournament.ownerId === userId;
      const isAdmin = await prisma.tournamentStaff.findFirst({
        where: {
          tournamentId,
          userId,
          role: { in: ['MODERATOR', 'DISPUTE_MANAGER', 'TOURNAMENT_OVERSEER'] },
        },
      });

      const user = await prisma.user.findUnique({ where: { id: userId }, select: { roles: true } });
      const isSuperAdmin =
        user?.roles?.includes(UserRole.ADMIN) || user?.roles?.includes(UserRole.SUPER_ADMIN);

      if (!isOwner && !isAdmin && !isSuperAdmin)
        throw new ForbiddenException('Admin access required to force check-in.');

      const data: any = {};
      if (teamNum === 1) {
        data.p1CheckInStatus = 'CHECKED_IN';
        data.p1CheckInAt = new Date();
      } else {
        data.p2CheckInStatus = 'CHECKED_IN';
        data.p2CheckInAt = new Date();
      }

      const p1Status = teamNum === 1 ? 'CHECKED_IN' : match.p1CheckInStatus;
      const p2Status = teamNum === 2 ? 'CHECKED_IN' : match.p2CheckInStatus;

      if (p1Status === 'CHECKED_IN' && p2Status === 'CHECKED_IN' && !match.matchReadyAt) {
        data.matchReadyAt = new Date();
      }

      return prisma.match.update({ where: { id: matchId }, data });
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
      include: { match: { select: { tournamentId: true, id: true, winnerId: true } } },
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

    const result = await this.prisma.$transaction(async (tx) => {
      const resolved = await tx.matchDispute.update({
        where: { id: disputeId },
        data: { status: 'RESOLVED', resolution, resolvedById: resolverId },
        include: {
          resolvedBy: { select: { id: true, discordName: true, displayName: true } },
        },
      });

      await tx.match.update({
        where: { id: dispute.match.id },
        data: { status: dispute.match.winnerId ? 'COMPLETED' : 'ONGOING' },
      });

      await tx.matchMessage.create({
        data: {
          matchId: dispute.match.id,
          senderId: resolverId,
          content: `✅ DISPUTE RESOLVED: ${resolution}`,
        },
      });

      return resolved;
    });

    await this.validateAndUnlockMatches(tournamentId);

    return result;
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

  async createOpenTeamWithParty(idOrSlug: string, userId: string) {
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
        'Only the party captain can utilize this party to create an open team.',
      );

    const memberCount = partyMember.party.members.length;
    if (memberCount < 1) {
      throw new BadRequestException(`Your party must have at least 1 member.`);
    }
    if (memberCount >= tournament.minTeamSize) {
      throw new BadRequestException(
        `Your party meets the minimum team size. Please use "Join with Full Party" instead.`,
      );
    }

    const memberIds = partyMember.party.members.map((m: any) => m.userId);

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

    // Create Team snapshot but DO NOT automatically submit it as a participant yet.
    return this.prisma.team.create({
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
      include: {
        players: {
          include: {
            player: { select: { id: true, discordName: true, displayName: true, photo: true } },
          },
        },
      },
    });
  }

  async joinSolo(idOrSlug: string, userId: string) {
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

    const existingTeamPlayer = await this.prisma.teamPlayer.findFirst({
      where: {
        playerId: userId,
        team: { tournamentId: tournament.id, isDeleted: false },
      },
    });
    if (existingTeamPlayer)
      throw new BadRequestException(
        'You are already part of a team in this tournament. You cannot join the solo queue.',
      );

    const existingParticipant = await this.prisma.participant.findFirst({
      where: {
        tournamentId: tournament.id,
        userId,
        status: { not: ParticipantStatus.CANCELLED },
      },
    });
    if (existingParticipant) {
      if (existingParticipant.teamId === null) {
        throw new BadRequestException('You are already in the solo queue for this tournament.');
      }
      throw new BadRequestException('You are already registered in this tournament.');
    }

    await this.prisma.participant.deleteMany({
      where: {
        tournamentId: tournament.id,
        userId,
        status: ParticipantStatus.CANCELLED,
      },
    });

    return this.prisma.participant.create({
      data: {
        tournamentId: tournament.id,
        userId,
        teamId: null, // explicit flag for solo queue
        status: ParticipantStatus.REGISTERED,
      },
      include: {
        user: { select: { id: true, discordName: true, displayName: true, photo: true } },
      },
    });
  }

  async getSoloQueue(idOrSlug: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    return this.prisma.participant.findMany({
      where: {
        tournamentId: tournament.id,
        teamId: null,
        status: { not: ParticipantStatus.CANCELLED },
      },
      include: {
        user: { select: { id: true, discordName: true, displayName: true, photo: true } },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * Allows admins to remove an accepted member from the solo queue pool.
   */
  async removeSoloQueueParticipant(idOrSlug: string, participantId: string, requesterId: string) {
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
      where: { tournamentId: tournament.id, userId: requesterId },
    });
    const userRoleObj = await this.prisma.user.findUnique({
      where: { id: requesterId },
      select: { roles: true },
    });
    const hasAdminRole =
      userRoleObj?.roles?.includes(UserRole.ADMIN) ||
      userRoleObj?.roles?.includes(UserRole.SUPER_ADMIN);
    const isAdmin = isOwner || staff || hasAdminRole;

    if (!isAdmin) {
      throw new ForbiddenException('Only an admin can remove solo queue members.');
    }

    const participant = await this.prisma.participant.findFirst({
      where: { id: participantId, tournamentId: tournament.id, teamId: null },
    });

    if (!participant) {
      throw new NotFoundException('Solo queue participant not found.');
    }

    return this.prisma.participant.update({
      where: { id: participant.id },
      data: { status: ParticipantStatus.CANCELLED },
    });
  }

  async leaveTournament(idOrSlug: string, userId: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    return this.prisma.$transaction(async (prisma) => {
      // 1. Determine who is leaving
      const partyMember = await prisma.partyMember.findFirst({
        where: { userId },
        include: { party: { include: { members: true } } },
      });

      const isPartyLeader = partyMember && partyMember.party.ownerId === userId;
      let usersToRemove: string[] = [userId];

      if (isPartyLeader) {
        usersToRemove = partyMember.party.members.map((m: any) => m.userId);
      }

      // 2. Handle Team case
      const teamPlayer = await prisma.teamPlayer.findFirst({
        where: { playerId: userId, team: { tournamentId: tournament.id, isDeleted: false } },
        include: { team: { include: { players: true, participants: true } } },
      });

      let wasInTeamOrActive = false;

      if (teamPlayer) {
        const team = teamPlayer.team;

        // Find which users to remove are actually in this team
        const playersInTeam = team.players.map((p: any) => p.playerId);
        const toRemoveFromTeam = usersToRemove.filter((uid) => playersInTeam.includes(uid));

        if (toRemoveFromTeam.length > 0) {
          wasInTeamOrActive = true;
          // Remove them
          await prisma.teamPlayer.deleteMany({
            where: { teamId: team.id, playerId: { in: toRemoveFromTeam } },
          });
          await prisma.teamPlayerRegistration.deleteMany({
            where: { teamId: team.id, playerId: { in: toRemoveFromTeam } },
          });
          if (team.participants.length > 0) {
            await prisma.tournamentRoster.deleteMany({
              where: { participant: { teamId: team.id }, userId: { in: toRemoveFromTeam } },
            });
          }

          // Check remaining
          const remainingPlayers = team.players.filter(
            (p: any) => !toRemoveFromTeam.includes(p.playerId),
          );

          if (remainingPlayers.length === 0) {
            // Team is empty -> delete team & mark participant as canceled
            if (team.participants.length > 0) {
              await prisma.participant.updateMany({
                where: { teamId: team.id, tournamentId: tournament.id },
                data: { status: ParticipantStatus.CANCELLED },
              });
            }
            await prisma.team.update({ where: { id: team.id }, data: { isDeleted: true } });
          } else {
            // Team is not empty. Did we remove the captain?
            const hasCaptain = remainingPlayers.some((p: any) => p.role === TeamPlayerRole.CAPTAIN);
            if (!hasCaptain) {
              // Pick a new captain from remaining
              const newCaptain = remainingPlayers[0];
              await prisma.teamPlayer.update({
                where: { id: newCaptain.id },
                data: { role: TeamPlayerRole.CAPTAIN },
              });
              // Update tournament roster role if it exists
              if (team.participants.length > 0) {
                // Must update via participant/roster matching
                await prisma.tournamentRoster.updateMany({
                  where: { participant: { teamId: team.id }, userId: newCaptain.playerId },
                  data: { role: TeamPlayerRole.CAPTAIN },
                });
              }
            }
          }
        }
      }

      // 3. Handle Solo check
      const participants = await prisma.participant.findMany({
        where: {
          tournamentId: tournament.id,
          userId: { in: usersToRemove },
          status: { not: ParticipantStatus.CANCELLED },
          teamId: null,
        },
      });

      if (participants.length > 0) {
        wasInTeamOrActive = true;
        for (const p of participants) {
          await prisma.participant.update({
            where: { id: p.id },
            data: { status: ParticipantStatus.CANCELLED },
          });
        }
      }

      if (!wasInTeamOrActive) {
        throw new BadRequestException('You are not registered in this tournament.');
      }

      return { message: 'Successfully left the tournament.' };
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
        teamVotes: true,
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
      where: { tournamentId: tournament.id, userId: requesterId },
    });
    const user = await this.prisma.user.findUnique({
      where: { id: requesterId },
      select: { roles: true },
    });
    const isAdmin =
      user?.roles?.includes(UserRole.ADMIN) || user?.roles?.includes(UserRole.SUPER_ADMIN);

    if (!isOwner && !staff && !isAdmin) {
      throw new ForbiddenException('You do not have permission to remove a team.');
    }

    return this.prisma.$transaction(async (prisma) => {
      const participant = await prisma.participant.findFirst({
        where: { tournamentId: tournament.id, teamId },
      });
      if (participant) {
        await prisma.participant.update({
          where: { id: participant.id },
          data: { status: ParticipantStatus.CANCELLED },
        });
      }
      return prisma.team.update({
        where: { id: teamId },
        data: { isDeleted: true },
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
      select: { id: true, ownerId: true, status: true },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    const isOwner = tournament.ownerId === requesterId;
    const staff = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId: tournament.id, userId: requesterId },
    });
    const userRoleObj = await this.prisma.user.findUnique({
      where: { id: requesterId },
      select: { roles: true },
    });
    const hasAdminRole =
      userRoleObj?.roles?.includes(UserRole.ADMIN) ||
      userRoleObj?.roles?.includes(UserRole.SUPER_ADMIN);
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
            userId: memberId,
          },
        });
      }

      // Restore to solo pool if it's SEEDING or REGISTRATION
      if (tournament.status === 'SEEDING' || tournament.status === 'REGISTRATION') {
        const exist = await prisma.participant.findFirst({
          where: { tournamentId: tournament.id, userId: memberId },
        });
        if (!exist) {
          await prisma.participant.create({
            data: { tournamentId: tournament.id, userId: memberId, status: 'REGISTERED' },
          });
        }
      }

      // Check if captain was removed and reassign if necessary
      if (memberRecord.role === TeamPlayerRole.CAPTAIN) {
        const remainingPlayers = team.players.filter((p) => p.playerId !== memberId);
        if (remainingPlayers.length > 0) {
          const newCaptain = remainingPlayers[0];
          await prisma.teamPlayer.update({
            where: { id: newCaptain.id },
            data: { role: TeamPlayerRole.CAPTAIN },
          });

          if (team.participants.length > 0) {
            await prisma.tournamentRoster.updateMany({
              where: { participant: { teamId }, userId: newCaptain.playerId },
              data: { role: TeamPlayerRole.CAPTAIN },
            });
          }
        } else {
          // If the team is now empty, delete it
          await prisma.team.update({
            where: { id: teamId },
            data: { isDeleted: true },
          });
          if (team.participants.length > 0) {
            await prisma.participant.updateMany({
              where: { teamId, tournamentId: tournament.id },
              data: { status: ParticipantStatus.CANCELLED },
            });
          }
        }
      }

      return { message: `Player removed from team successfully.` };
    });
  }

  async adminAddPlayerToTeam(
    idOrSlug: string,
    teamId: string,
    playerId: string,
    requesterId: string,
  ) {
    const tournament = await this.prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
      },
      select: {
        id: true,
        ownerId: true,
        status: true,
        maxTeamSize: true,
        allowSubstitutions: true,
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found.');

    const isOwner = tournament.ownerId === requesterId;
    const staff = await this.prisma.tournamentStaff.findFirst({
      where: { tournamentId: tournament.id, userId: requesterId },
    });
    const userRoleObj = await this.prisma.user.findUnique({
      where: { id: requesterId },
      select: { roles: true },
    });
    const hasAdminRole =
      userRoleObj?.roles?.includes('ADMIN') || userRoleObj?.roles?.includes('SUPER_ADMIN');

    if (!isOwner && !staff && !hasAdminRole) {
      throw new ForbiddenException('Only the tournament organizer and staff can do this.');
    }

    if (tournament.status !== 'SEEDING') {
      throw new BadRequestException(
        'Players can only be manually added to teams during the seeding phase.',
      );
    }

    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: { players: true, participants: true },
    });

    if (!team || team.isDeleted || team.tournamentId !== tournament.id) {
      throw new NotFoundException('Team not found.');
    }

    const maxCapacity = tournament.maxTeamSize + (tournament.allowSubstitutions ? 1 : 0);
    if (team.players.length >= maxCapacity) {
      throw new BadRequestException('Team is already full.');
    }

    return this.prisma.$transaction(async (prisma) => {
      // Remove any solo participant records for this player
      await prisma.participant.deleteMany({
        where: { tournamentId: tournament.id, userId: playerId, teamId: null },
      });

      // Add as TeamPlayer
      const role = team.players.length === 0 ? 'CAPTAIN' : 'MEMBER';
      await prisma.teamPlayer.create({
        data: {
          teamId,
          playerId,
          role,
        },
      });

      // If team already has a participant record, add to roster
      if (team.participants.length > 0) {
        const teamParticipant = team.participants[0];
        await prisma.tournamentRoster.create({
          data: {
            participantId: teamParticipant.id,
            userId: playerId,
            role,
          },
        });

        if (!teamParticipant.userId && role === 'CAPTAIN') {
          await prisma.participant.update({
            where: { id: teamParticipant.id },
            data: { userId: playerId },
          });
        }
      }

      return { message: 'Player successfully added to the team.' };
    });
  }

  async forceTeamCaptain(idOrSlug: string, teamId: string, memberId: string, requesterId: string) {
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
      where: { tournamentId: tournament.id, userId: requesterId },
    });
    const userRoleObj = await this.prisma.user.findUnique({
      where: { id: requesterId },
      select: { roles: true },
    });
    const hasAdminRole =
      userRoleObj?.roles?.includes(UserRole.ADMIN) ||
      userRoleObj?.roles?.includes(UserRole.SUPER_ADMIN);
    const isAdmin = isOwner || staff || hasAdminRole;

    if (!isAdmin) {
      throw new ForbiddenException('Only an admin can force assign the captain role.');
    }

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

    const memberRecord = team.players.find((p) => p.playerId === memberId);
    if (!memberRecord) {
      throw new NotFoundException('This player is not a member of the team.');
    }

    if (memberRecord.role === TeamPlayerRole.CAPTAIN) {
      throw new BadRequestException('Player is already the captain.');
    }

    return this.prisma.$transaction(async (prisma) => {
      // Demote current captain
      await prisma.teamPlayer.updateMany({
        where: { teamId, role: TeamPlayerRole.CAPTAIN },
        data: { role: TeamPlayerRole.MEMBER },
      });

      if (team.participants.length > 0) {
        await prisma.tournamentRoster.updateMany({
          where: { participant: { teamId }, role: TeamPlayerRole.CAPTAIN },
          data: { role: TeamPlayerRole.MEMBER },
        });
      }

      // Promote new captain
      await prisma.teamPlayer.update({
        where: { id: memberRecord.id },
        data: { role: TeamPlayerRole.CAPTAIN },
      });

      if (team.participants.length > 0) {
        await prisma.tournamentRoster.updateMany({
          where: { participant: { teamId }, userId: memberId },
          data: { role: TeamPlayerRole.CAPTAIN },
        });
      }

      await prisma.teamVote.deleteMany({ where: { teamId, type: 'CAPTAIN' } });

      return { message: 'Captain role successfully reassigned.' };
    });
  }

  // --- Team Hub API ---
  async voteTeamAction(
    tournamentId: string,
    teamId: string,
    type: 'CAPTAIN' | 'KICK',
    targetId: string,
    voterId: string,
  ) {
    return this.prisma.$transaction(async (prisma) => {
      const voter = await prisma.teamPlayer.findFirst({ where: { teamId, playerId: voterId } });
      if (!voter) throw new ForbiddenException('You must be a team member to cast a vote');

      const teamPlayers = await prisma.teamPlayer.findMany({ where: { teamId } });
      const currentCount = teamPlayers.length;

      if (!teamPlayers.find((p) => p.playerId === targetId))
        throw new NotFoundException('Target user is not in the team');

      const existingVote = await prisma.teamVote.findUnique({
        where: { teamId_type_targetId_voterId: { teamId, type, targetId, voterId } },
      });

      let action = 'CAST';
      if (existingVote) {
        await prisma.teamVote.delete({
          where: { teamId_type_targetId_voterId: { teamId, type, targetId, voterId } },
        });
        action = 'REVOKE';
      } else {
        await prisma.teamVote.create({
          data: { teamId, type, targetId, voterId: voterId },
        });
      }

      const totalVotes = await prisma.teamVote.count({ where: { teamId, type, targetId } });
      const majority = Math.floor(currentCount / 2) + 1;

      let executedFor = null;
      if (action === 'CAST' && totalVotes >= majority) {
        if (type === 'CAPTAIN') {
          await prisma.teamPlayer.updateMany({
            where: { teamId, role: 'CAPTAIN' },
            data: { role: 'MEMBER' },
          });
          await prisma.teamPlayer.updateMany({
            where: { teamId, playerId: targetId },
            data: { role: 'CAPTAIN' },
          });
          await prisma.teamVote.deleteMany({ where: { teamId, type: 'CAPTAIN' } });
          executedFor = targetId;
        } else if (type === 'KICK') {
          const isCaptain = teamPlayers.find((p) => p.playerId === targetId)?.role === 'CAPTAIN';
          await prisma.teamPlayer.deleteMany({ where: { teamId, playerId: targetId } });
          await prisma.teamVote.deleteMany({ where: { teamId, type: 'KICK', targetId } });
          executedFor = targetId;

          if (isCaptain) {
            const remaining = await prisma.teamPlayer.findMany({ where: { teamId } });
            if (remaining.length > 0) {
              await prisma.teamPlayer.update({
                where: { id: remaining[0].id },
                data: { role: 'CAPTAIN' },
              });
            }
          }
        }
      }

      return { totalVotes, majority, executedFor, action, targetId, type, voterId };
    });
  }

  async getTeamMessages(teamId: string, userId: string) {
    const isMember = await this.prisma.teamPlayer.findFirst({
      where: { teamId, playerId: userId },
    });
    const staffCheck = await this.prisma.tournamentStaff.findFirst({ where: { userId } }); // Simplification: Staff could theoretically bypass
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { roles: true },
    });
    const isSuper = user?.roles?.includes('ADMIN') || user?.roles?.includes('SUPER_ADMIN');

    if (!isMember && !staffCheck && !isSuper)
      throw new ForbiddenException('Secure Team Chat: Not authorized.');

    return this.prisma.teamMessage.findMany({
      where: { teamId },
      include: {
        sender: { select: { id: true, discordName: true, displayName: true, photo: true } },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async addTeamMessage(teamId: string, userId: string, content: string) {
    const isMember = await this.prisma.teamPlayer.findFirst({
      where: { teamId, playerId: userId },
    });
    if (!isMember) throw new ForbiddenException('Secure Team Chat: Not authorized to send.');

    return this.prisma.teamMessage.create({
      data: { teamId, senderId: userId, content },
      include: {
        sender: { select: { id: true, discordName: true, displayName: true, photo: true } },
      },
    });
  }

  async openTeamDispute(teamId: string, userId: string, reason?: string, context?: string) {
    const isMember = await this.prisma.teamPlayer.findFirst({
      where: { teamId, playerId: userId },
    });
    if (!isMember) throw new ForbiddenException('Secure Team Chat: Not authorized.');

    const existing = await this.prisma.teamDispute.findFirst({
      where: { teamId, status: 'PENDING' },
    });
    if (existing) return existing;

    return this.prisma.teamDispute.create({
      data: { teamId, reportedById: userId, reason, context, status: 'PENDING' },
    });
  }

  async notifyParticipants(tournamentId: string, userId: string, message?: string) {
    await this.checkOwnership(tournamentId, {
      id: userId,
      roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN],
    });

    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      include: {
        participants: {
          where: { status: { not: ParticipantStatus.CANCELLED } },
          include: { team: { include: { players: true } } },
        },
      },
    });

    if (!tournament) throw new NotFoundException('Tournament not found');

    const notificationMessage = message || `Action required: ${tournament.name} is starting soon!`;

    const userIdsToNotify = new Set<string>();

    for (const p of tournament.participants) {
      if (p.userId) {
        userIdsToNotify.add(p.userId);
      }
      if (p.team) {
        for (const player of p.team.players) {
          userIdsToNotify.add(player.playerId);
        }
      }
    }

    const notifications = Array.from(userIdsToNotify).map((uId) => ({
      userId: uId,
      type: NotificationType.TOURNAMENT_UPDATE,
      title: 'Tournament Update',
      message: notificationMessage,
      payload: { tournamentId },
    }));

    if (notifications.length > 0) {
      await this.notificationsService.createMany(notifications);
    }

    return { success: true, count: notifications.length };
  }
}
