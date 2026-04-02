import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole, TournamentRoleType, MatchStatus } from '@prisma/client';

@Injectable()
export class TournamentService {
  // 1. Inject the Prisma Service so we can talk to the database
  constructor(private prisma: PrismaService) {}

  private async checkOwnership(tournamentId: string, user: any) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }

    const isAdmin = user.roles?.includes(UserRole.ADMIN) || user.roles?.includes(UserRole.SUPER_ADMIN);
    const isOwner = tournament.ownerId === user.id;

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('You do not have permission to modify this tournament.');
    }

    return tournament;
  }

  // 2. The logic from your old script.ts for creating a tournament
  async create(createTournamentDto: CreateTournamentDto, ownerId: string) {
    return this.prisma.tournament.create({
      data: {
        name: createTournamentDto.name,
        description: createTournamentDto.description ?? '',
        game: createTournamentDto.game,
        region: createTournamentDto.region,
        startTime: createTournamentDto.startTime ? new Date(createTournamentDto.startTime) : undefined,
        imageUrl: createTournamentDto.imageUrl,
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
        
        owner: {
          connect: { id: ownerId }
        },
        
        // Dynamically map the array of prize pools from the request
        prizePools: createTournamentDto.prizePools ? {
          create: createTournamentDto.prizePools.map(pool => ({
            position: pool.position as any,
            amount: pool.amount,
          })),
        } : undefined,
      },
      include: {
        owner: true,
        prizePools: true,
      },
    });
  }

  async assignStaff(tournamentId: string, ownerId: string, payload: { discordHandle: string; role: TournamentRoleType }) {
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
      throw new BadRequestException('User not found. Make sure they have logged into the website at least once!');
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

  async findMyTournaments(userId: string) {
    return this.prisma.tournament.findMany({
      where: {
        isDeleted: false,
        OR: [
          { ownerId: userId },
          { staff: { some: { userId } } },
        ],
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
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // 3. The logic from your old script.ts for fetching tournaments
  async findAll() {
    return this.prisma.tournament.findMany({
      where: { isDeleted: false },
      // Order them so the newest events show up at the top of the list
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        // Fetch the prize pools
        prizePools: true,
      },
    });
  }

  // (NestJS generated these placeholders for you to fill out later)
  async findOne(id: string) {
    const tournament = await this.prisma.tournament.findFirst({
      where: { id, isDeleted: false },
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
      throw new NotFoundException(`Tournament with ID ${id} not found.`);
    }

    return tournament;
  }

  async update(id: string, updateTournamentDto: UpdateTournamentDto, user: any) {
    await this.checkOwnership(id, user);

    const { prizePools, ...rest } = updateTournamentDto;

    // Build the prize pool update logic
    const prizePoolUpdate = prizePools ? {
      // 1. Delete prize pools that are not in the new list
      deleteMany: {
        id: {
          notIn: prizePools.filter(p => p.id).map(p => p.id!)
        }
      },
      // 2. Update existing ones
      update: prizePools.filter(p => p.id).map(pool => ({
        where: { id: pool.id },
        data: {
          position: pool.position as any,
          amount: pool.amount,
        }
      })),
      // 3. Create new ones
      create: prizePools.filter(p => !p.id).map(pool => ({
        position: pool.position as any,
        amount: pool.amount,
      }))
    } : undefined;

    try {
      return await this.prisma.tournament.update({
        where: { id },
        data: {
          ...rest,
          ...(prizePoolUpdate && {
            prizePools: prizePoolUpdate,
          }),
        },
        include: {
          prizePools: true,
        }
      });
    } catch (error) {
      // If Prisma can't find the UUID to update, throw our clean 404
      throw new NotFoundException(`Cannot update. Tournament with ID ${id} not found.`);
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

  async getBracket(tournamentId: string) {
    return this.prisma.match.findMany({
      where: { tournamentId },
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
      select: { ownerId: true },
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

    // Update match scores and status
    return this.prisma.match.update({
      where: { id: matchId },
      data: {
        p1Score: payload.team1Score,
        p2Score: payload.team2Score,
        status: MatchStatus.COMPLETED,
      },
    });
  }
}