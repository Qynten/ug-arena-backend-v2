"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./lib/prisma");
async function main() {
    // Create an organizer user
    const organizer = await prisma_1.prisma.user.create({
        data: {
            name: "Organizer Alice",
            email: "alice@prisma.io",
            password: "secure-password",
            roles: ["ORGANIZER"],
        },
    });
    console.log("Created organizer:", organizer);
    // Create a tournament organized by Alice
    const tournament = await prisma_1.prisma.tournament.create({
        data: {
            name: "Spring Arena 2026",
            description: "A competitive tournament for gaming enthusiasts.",
            regStart: new Date(),
            regEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week later
            maxParticipants: 16,
            maxTeamSize: 5,
            organizer: {
                connect: { id: organizer.id },
            },
            prizePools: {
                create: [
                    { position: "FIRST", amount: 1000 },
                    { position: "SECOND", amount: 500 },
                ],
            },
        },
        include: {
            organizer: true,
            prizePools: true,
        },
    });
    console.log("Created tournament:", JSON.stringify(tournament, null, 2));
    // Fetch all tournaments
    const allTournaments = await prisma_1.prisma.tournament.findMany({
        include: {
            organizer: true,
            prizePools: true,
        },
    });
    console.log("All tournaments:", JSON.stringify(allTournaments, null, 2));
}
main()
    .then(async () => {
    await prisma_1.prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma_1.prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=script.js.map