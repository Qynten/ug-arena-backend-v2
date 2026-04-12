import { PrismaClient, TeamPlayerRole, ParticipantStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'seed') {
    const tournamentId = args[1];
    const numTeams = parseInt(args[2] || '4', 10);

    if (!tournamentId) {
      console.error('Please provide a tournament ID: npm run seed:tournament seed <tournament-id> <num-teams>');
      process.exit(1);
    }

    const tournament = await prisma.tournament.findFirst({
      where: {
        OR: [
          { id: tournamentId },
          { slug: tournamentId },
          { name: tournamentId },
        ]
      },
      include: {
        _count: {
          select: { participants: { where: { status: { not: ParticipantStatus.CANCELLED } } } },
        },
      },
    });

    if (!tournament) {
      console.error(`Tournament not found with ID: ${tournamentId}`);
      process.exit(1);
    }

    const currentTeamsCount = tournament._count.participants;
    const maxParticipants = tournament.maxParticipants;
    
    console.log(`Tournament: ${tournament.name}`);
    console.log(`Config: Type=${tournament.type}, minTeamSize=${tournament.minTeamSize}, Max Participants=${maxParticipants}`);
    console.log(`Current participants/teams: ${currentTeamsCount}`);

    const teamsToCreate = Math.min(numTeams, maxParticipants - currentTeamsCount);
    
    if (teamsToCreate <= 0) {
      console.log('Tournament is already full or requested to create 0 teams.');
      process.exit(0);
    }

    console.log(`Creating ${teamsToCreate} mock teams...`);

    for (let i = 0; i < teamsToCreate; i++) {
      const suffix = Math.random().toString(36).substring(2, 8);
      const teamSize = tournament.minTeamSize > 1 ? tournament.minTeamSize : 1;
      
      const members: any[] = [];
      // 1. Create mock users
      for (let j = 0; j < teamSize; j++) {
        const user = await prisma.user.create({
          data: {
            email: `mock_${suffix}_${j}@example.com`,
            displayName: `Mock Player ${suffix}-${j}`,
            discordName: `mockplayer_${suffix}_${j}`,
          },
        });
        members.push(user);
      }

      const captain = members[0];
      const teamName = `Mock Team ${suffix}`;

      // 2. Register Team
      await prisma.$transaction(async (tx) => {
        const team = await tx.team.create({
          data: {
            name: teamName,
            tournamentId: tournament.id,
            players: {
              create: members.map((m, index) => ({
                playerId: m.id,
                role: index === 0 ? TeamPlayerRole.CAPTAIN : TeamPlayerRole.MEMBER,
              })),
            },
          },
        });

        await tx.participant.create({
          data: {
            tournamentId: tournament.id,
            userId: captain.id,
            teamId: team.id,
            rosters: {
              create: members.map((m, index) => ({
                userId: m.id,
                role: index === 0 ? TeamPlayerRole.CAPTAIN : TeamPlayerRole.MEMBER,
              })),
            },
          },
        });
      });

      console.log(`Created team: ${teamName} with ${members.length} member(s)`);
    }

    console.log('Done seeding mock teams! Check the tournament overview on the site.');

  } else if (command === 'clear') {
    const tournamentId = args[1];
    
    if (!tournamentId) {
       console.error('Please provide a tournament ID: npm run seed:tournament clear <tournament-id>');
       process.exit(1);
    }
    
    let tournamentIdToClear = tournamentId;
    if (tournamentId && !tournamentId.includes("-")) {
       const tournament = await prisma.tournament.findFirst({
         where: {
           OR: [
             { id: tournamentId },
             { slug: tournamentId },
             { name: tournamentId }
           ]
         }
       });
       if (tournament) {
         tournamentIdToClear = tournament.id;
       } else {
         console.error(`Tournament not found with name/ID: ${tournamentId}`);
         process.exit(1);
       }
    }
    
    console.log(`Clearing ALL mock data for tournament ${tournamentIdToClear}...`);
    
    // Find all users that are part of mock teams for this tournament
    const mockTeams = await prisma.team.findMany({
      where: { 
        tournamentId: tournamentIdToClear,
        name: { startsWith: 'Mock Team' }
      },
      include: {
        players: true
      }
    });
    
    let mockUserIds: string[] = [];
    mockTeams.forEach(t => {
      mockUserIds.push(...t.players.map(p => p.playerId));
    });

    await prisma.participant.deleteMany({
      where: { tournamentId: tournamentIdToClear, teamId: { in: mockTeams.map(t => t.id) } }
    });
    
    await prisma.team.deleteMany({
      where: { id: { in: mockTeams.map(t => t.id) } }
    });
    
    await prisma.user.deleteMany({
      where: { id: { in: mockUserIds } }
    });
    
    console.log(`Cleared ${mockTeams.length} mock teams and their users.`);
  } else {
    console.error('Unknown command. Use "seed" or "clear".');
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
