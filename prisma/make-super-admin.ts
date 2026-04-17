import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const emailOrId = process.argv[2];
  
  if (!emailOrId) {
    console.error('Please provide an email or user ID. Example: npm run make-admin user@example.com');
    process.exit(1);
  }

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: emailOrId },
        { id: emailOrId }
      ]
    }
  });

  if (!user) {
    console.error(`User with email or ID ${emailOrId} not found.`);
    process.exit(1);
  }

  const updatedRoles = [...new Set([...(user.roles || []), 'SUPER_ADMIN'])];

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
