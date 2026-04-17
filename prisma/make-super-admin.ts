import { PrismaClient, UserRole } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL as string });
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Try to match email, discordName, displayName, or id
  const identifier = process.argv[2];
  
  if (!identifier) {
    console.error('Please provide an identifier. Example: npm run make-admin your_username');
    process.exit(1);
  }

  const users = await prisma.user.findMany();
  
  const user = users.find(u => 
    u.email?.toLowerCase().includes(identifier.toLowerCase()) || 
    u.id === identifier ||
    u.discordName?.toLowerCase().includes(identifier.toLowerCase()) ||
    u.displayName?.toLowerCase().includes(identifier.toLowerCase())
  );

  if (!user) {
    console.error(`User matching '${identifier}' not found.`);
    process.exit(1);
  }

  const updatedRoles = [...new Set([...(user.roles || []), UserRole.SUPER_ADMIN])] as UserRole[];

  await prisma.user.update({
    where: { id: user.id },
    data: {
      roles: updatedRoles
    }
  });

  console.log(`Successfully granted SUPER_ADMIN to ${user.displayName || user.email}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
