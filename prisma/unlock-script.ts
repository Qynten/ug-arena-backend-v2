import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

async function run() {
  const tournaments = await prisma.tournament.findMany({ where: { status: 'LIVE' } });
  console.log("Live tournaments:", tournaments.map(t => t.id));
  
  for (const t of tournaments) {
    console.log("---");
    console.log("Unlocking for", t.id);
    
    const lockedMatches = await prisma.match.findMany({
      where: {
        tournamentId: t.id,
        status: 'PENDING',
        unlockedAt: null,
        participant1Id: { not: null },
        participant2Id: { not: null },
      },
      include: { round: true, participant1: { include: { team: true, user: true } }, participant2: { include: { team: true, user: true } } },
    });

    console.log(`Found ${lockedMatches.length} mathematically locked, pending matches with both users.`);

    for (const m of lockedMatches) {
      const p1Blocking = await prisma.match.findFirst({
        where: {
          tournamentId: t.id,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant1Id }, { participant2Id: m.participant1Id }],
          round: { name: { lt: m.round.name } },
        },
        include: { round: true }
      });

      const p2Blocking = await prisma.match.findFirst({
        where: {
          tournamentId: t.id,
          status: { in: ['PENDING', 'ONGOING', 'DISPUTED'] },
          OR: [{ participant1Id: m.participant2Id }, { participant2Id: m.participant2Id }],
          round: { name: { lt: m.round.name } },
        },
        include: { round: true }
      });

      const p1Name = m.participant1?.team?.name || m.participant1?.user?.discordName || 'P1';
      const p2Name = m.participant2?.team?.name || m.participant2?.user?.discordName || 'P2';

      if (p1Blocking) {
          console.log(`[LOCKED] Match ${m.id} (Round ${m.round.name}) locked because ${p1Name} has a ${p1Blocking.status} match in Round ${p1Blocking.round.name}`);
      }
      if (p2Blocking) {
          console.log(`[LOCKED] Match ${m.id} (Round ${m.round.name}) locked because ${p2Name} has a ${p2Blocking.status} match in Round ${p2Blocking.round.name}`);
      }

      if (!p1Blocking && !p2Blocking) {
        console.log(`[UNLOCKING] Match ${m.id} (Round ${m.round.name}) - Players ${p1Name} vs ${p2Name} are FREE!`);
        await prisma.match.update({
          where: { id: m.id },
          data: { unlockedAt: new Date() },
        });
      }
    }
  }
}
run();
