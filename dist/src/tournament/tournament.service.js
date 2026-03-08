"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TournamentService = class TournamentService {
    prisma;
    // 1. Inject the Prisma Service so we can talk to the database
    constructor(prisma) {
        this.prisma = prisma;
    }
    // 2. The logic from your old script.ts for creating a tournament
    async create(createTournamentDto) {
        return this.prisma.tournament.create({
            data: {
                name: createTournamentDto.name,
                description: createTournamentDto.description ?? '',
                regStart: new Date(),
                regEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                maxParticipants: createTournamentDto.maxParticipants,
                maxTeamSize: createTournamentDto.maxTeamSize,
                organizer: {
                    connect: { id: createTournamentDto.organizerId }
                },
                // Dynamically map the array of prize pools from the request
                prizePools: createTournamentDto.prizePools ? {
                    create: createTournamentDto.prizePools.map(pool => ({
                        position: pool.position,
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`Tournament with ID ${id} not found.`);
        }
        return tournament;
    }
    async update(id, updateTournamentDto) {
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
                                position: pool.position,
                                amount: pool.amount,
                            })),
                        },
                    }),
                },
            });
        }
        catch (error) {
            // If Prisma can't find the UUID to update, throw our clean 404
            throw new common_1.NotFoundException(`Cannot update. Tournament with ID ${id} not found.`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.tournament.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Cannot delete. Tournament with ID ${id} not found.`);
        }
    }
};
exports.TournamentService = TournamentService;
exports.TournamentService = TournamentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TournamentService);
//# sourceMappingURL=tournament.service.js.map