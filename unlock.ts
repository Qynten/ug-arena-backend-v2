import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  const tournaments = await prisma.tournament.findMany({ where: { status: 'LIVE' } });
  for (const t of tournaments) {
    console.log("Unlocking for", t.id);
    
    const lockedMatches = await prisma.match.findMany({
      where: {
        tournamentId: t.id,
        status: 'PENDING',
        unlockedAt: null,
        participant1Id: { not: null },
        participant2Id: { not: null },
      },
      include: { round: true },
    });

    for (const m of lockedMatches) {
      const p1Blocking = await prisma.match.findFirst({
        where: {
          tournamentId: t.id,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant1Id }, { participant2Id: m.participant1Id }],
          round: { name: { lt: m.round.name } },
        },
      });

      const p2Blocking = await prisma.match.findFirst({
        where: {
          tournamentId: t.id,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant2Id }, { participant2Id: m.participant2Id }],
          round: { name: { lt: m.round.name } },
        },
      });

      if (!p1Blocking && !p2Blocking) {
        console.log("Unlocking match", m.id);
        await prisma.match.update({
          where: { id: m.id },
          data: { unlockedAt: new Date() },
        });
      }
    }
  }
}
run();
