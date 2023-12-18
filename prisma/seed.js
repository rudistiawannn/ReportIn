/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const createRoleAdmin = await prisma.role.create({
    data: {
      level: 'admin',
    },
  });
  const createRoleUser = await prisma.role.create({
    data: {
      level: 'user',
    },
  });
  console.log(createRoleAdmin, createRoleUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
