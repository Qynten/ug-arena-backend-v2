import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const tournament = await prisma.tournament.findFirst({
      where: {
        isDeleted: false,
        OR: [{ id: '071275ff-185e-4dd7-b543-be83c5bb6087' }, { slug: '071275ff-185e-4dd7-b543-be83c5bb6087' }],
      },
      select: { id: true },
    });
    console.log('Tournament:', tournament);
    const matches = await prisma.match.findMany({
      where: { tournamentId: tournament?.id },
      include: {
        participant1: {
          include: {
            user: { select: { id: true, discordName: true, photo: true } },
            team: { include: { players: { include: { player: { select: { id: true, discordName: true, displayName: true, photo: true } } } } } }
          }
        },
        participant2: {
          include: {
            user: { select: { id: true, discordName: true, photo: true } },
            team: { include: { players: { include: { player: { select: { id: true, discordName: true, displayName: true, photo: true } } } } } }
          }
        },
        round: true
      },
      orderBy: { createdAt: 'asc' }
    });
    console.log('Matches count:', matches.length);
}
main().catch(console.error).finally(() => prisma.$disconnect());
