const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const t = await prisma.tournament.findFirst({
    where: { bracketType: 'ROUND_ROBIN' },
    orderBy: { createdAt: 'desc' },
    include: { rounds: true, participants: true }
  });
  if (!t) return console.log('No round robin tournament found');
  
  const matches = await prisma.match.findMany({ where: { tournamentId: t.id }});
  console.log(`Tournament: ${t.name}`);
  console.log(`Participants: ${t.participants.length}`);
  console.log(`Rounds: ${t.rounds.length}`);
  console.log(`Total Matches: ${matches.length}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
