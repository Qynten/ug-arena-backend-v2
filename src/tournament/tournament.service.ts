import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '@prisma/client';

@Injectable()
export class TournamentService {
  // 1. Inject the Prisma Service so we can talk to the database
  constructor(private prisma: PrismaService) {}

  private async checkOwnership(tournamentId: string, user: any) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { organizerId: true },
    });

    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }

    const isAdmin = user.roles.includes(UserRole.ADMIN) || user.roles.includes(UserRole.SUPER_ADMIN);
    const isOrganizer = user.roles.includes(UserRole.ORGANIZER);

    if (isOrganizer && !isAdmin && tournament.organizerId !== user.id) {
      throw new ForbiddenException('You do not have permission to modify this tournament.');
    }

    return tournament;
  }

  // 2. The logic from your old script.ts for creating a tournament
  async create(createTournamentDto: CreateTournamentDto, organizerId: string) {
    return this.prisma.tournament.create({
      data: {
        name: createTournamentDto.name,
        description: createTournamentDto.description ?? '',
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
        
        organizer: {
          connect: { id: organizerId }
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
        organizer: true,
        prizePools: true,
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
        // Fetch the organizer, but ONLY select safe public fields
        organizer: {
          select: {
            id: true,
            discordName: true,
            email: true,
            photo: true,
            // Notice we completely omitted the password and role fields!
          }
        },
      },
    });
  }

  // (NestJS generated these placeholders for you to fill out later)
  async findOne(id: string) {
    const tournament = await this.prisma.tournament.findUnique({
      where: { id, isDeleted: false }, // Search by the UUID and ensure not deleted
      include: {
        prizePools: true,
        // Keep the exact same security firewall we built for findAll
        organizer: {
          select: {
            id: true,
            discordName: true,
            email: true,
            photo: true,
          }
        },
      },
    });

    // If the database returns nothing, throw a clean 404 error
    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${id} not found.`);
    }

    return tournament;
  }

  async update(id: string, updateTournamentDto: UpdateTournamentDto, user: any) {
    await this.checkOwnership(id, user);

    const { organizerId, prizePools, ...rest } = updateTournamentDto;

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
          ...(organizerId && {
            organizer: { connect: { id: organizerId } },
          }),
          ...(prizePoolUpdate && {
            prizePools: prizePoolUpdate,
          }),
        },
        include: {
          prizePools: true,
          organizer: {
            select: {
              id: true,
              discordName: true,
              email: true,
              photo: true,
            }
          }
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
}