import { PrismaClient } from '@prisma/client';

export const context = {
  db: new PrismaClient(),
};
