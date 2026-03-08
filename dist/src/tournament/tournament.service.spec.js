"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tournament_service_1 = require("./tournament.service");
const prisma_service_1 = require("../../prisma/prisma.service");
describe('TournamentService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [tournament_service_1.TournamentService, prisma_service_1.PrismaService],
        }).compile();
        service = module.get(tournament_service_1.TournamentService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=tournament.service.spec.js.map