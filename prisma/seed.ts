import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    id: 'afb96a1b-4d64-59ea-b6ed-9970c6e91107',
  },
];

const transfer = async () => {
  const users = [];
  for (const u of userData) {
    const user = prisma.user.create({
      data: u,
    });
    users.push(user);
  }
  return await prisma.$transaction(users);
};

const main = async () => {
  console.log(`Start seeding ...`);

  await transfer();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
