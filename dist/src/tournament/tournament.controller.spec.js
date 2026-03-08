"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tournament_controller_1 = require("./tournament.controller");
const tournament_service_1 = require("./tournament.service");
const prisma_service_1 = require("../../prisma/prisma.service");
describe('TournamentController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [tournament_controller_1.TournamentController],
            providers: [tournament_service_1.TournamentService, prisma_service_1.PrismaService],
        }).compile();
        controller = module.get(tournament_controller_1.TournamentController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=tournament.controller.spec.js.map