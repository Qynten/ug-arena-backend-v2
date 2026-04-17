import { PrismaClient } from '@prisma/client';
import { TournamentService } from './src/tournament/tournament.service';
import { Logger } from '@nestjs/common';
const prisma = new PrismaClient();

// Minimal mock to pass to service
class MockPrisma {
  get match() { return prisma.match; }
  get participant() { return prisma.participant; }
  // Provide $transaction dummy
  async $transaction(cb: any) { return cb(prisma); }
}

async function main() {
  const tournaments = await prisma.tournament.findMany({
    orderBy: { createdAt: 'desc' },
    take: 1
  });
  
  if (!tournaments[0]) return console.log("No tournaments");
  const tid = tournaments[0].id;
  
  const matchesToValidate = await prisma.match.findMany({
      where: {
        tournamentId: tid,
        status: 'PENDING',
        participant1Id: { not: null },
        participant2Id: { not: null },
      },
      include: { round: true },
  });

  console.log(`Found ${matchesToValidate.length} matches to validate`);

  for (const m of matchesToValidate) {
      const p1Blocking = await prisma.match.findFirst({
        where: {
          tournamentId: tid,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant1Id }, { participant2Id: m.participant1Id }],
          round: { name: { lt: m.round.name } },
        },
      });

      const p2Blocking = await prisma.match.findFirst({
        where: {
          tournamentId: tid,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant2Id }, { participant2Id: m.participant2Id }],
          round: { name: { lt: m.round.name } },
        },
      });

      const isBlocked = !!(p1Blocking || p2Blocking);
      console.log(`Match ${m.id} | isBlocked: ${isBlocked} | p1Block: ${p1Blocking?.id} (${p1Blocking?.status}) | p2Block: ${p2Blocking?.id} (${p2Blocking?.status})`);
      
      const p1Name = m.participant1Id || 'TBD';
      const p2Name = m.participant2Id || 'TBD';
      console.log(` > For ${p1Name} vs ${p2Name} (Round ${m.round.name}) unlockedAt is ${m.unlockedAt ? 'set' : 'null'}`);
  }
}

main().finally(() => prisma.$disconnect());
