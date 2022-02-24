import { MutationResolvers } from '../../generated/resolvers-types';

export const Mutation: MutationResolvers = {
  async createTask(parent, args, ctx) {
    const task = ctx.db.task.create({
      data: { ...args, userId: 'afb96a1b-4d64-59ea-b6ed-9970c6e91107' },
    });
    return task;
  },
  async deleteTask(parent, args, ctx) {
    const task = ctx.db.task.delete({
      where: { id: args.id },
    });
    return task;
  },
};
