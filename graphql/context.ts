import { PrismaClient } from '@prisma/client';
import { prisma } from '../prisma/db';

export interface Context {
  db: PrismaClient;
}

export const context: { db: PrismaClient } = {
  db: prisma,
};
