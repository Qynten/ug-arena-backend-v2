import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TournamentService {
  // 1. Inject the Prisma Service so we can talk to the database
  constructor(private prisma: PrismaService) {}

  // 2. The logic from your old script.ts for creating a tournament
  async create(createTournamentDto: CreateTournamentDto, organizerId: string) {
    return this.prisma.tournament.create({
      data: {
        name: createTournamentDto.name,
        description: createTournamentDto.description ?? '',
        regStart: new Date(),
        regEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
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
            name: true,
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
      where: { id }, // Search by the UUID
      include: {
        prizePools: true,
        // Keep the exact same security firewall we built for findAll
        organizer: {
          select: {
            id: true,
            name: true,
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

  async update(id: string, updateTournamentDto: UpdateTournamentDto) {
    const { organizerId, prizePools, ...rest } = updateTournamentDto;

    try {
      return await this.prisma.tournament.update({
        where: { id },
        data: {
          ...rest,
          ...(organizerId && {
            organizer: { connect: { id: organizerId } },
          }),
          ...(prizePools && {
            prizePools: {
              deleteMany: {}, // Simplest way to update: clear and recreate
              create: prizePools.map((pool) => ({
                position: pool.position as any,
                amount: pool.amount,
              })),
            },
          }),
        },
      });
    } catch (error) {
      // If Prisma can't find the UUID to update, throw our clean 404
      throw new NotFoundException(`Cannot update. Tournament with ID ${id} not found.`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.tournament.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Cannot delete. Tournament with ID ${id} not found.`);
    }
  }
}