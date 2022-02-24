import { QueryResolvers } from '../../generated/resolvers-types';

export const Query: QueryResolvers = {
  async tasks(parent, args, ctx) {
    return ctx.db.task.findMany();
  },
};
