import { extendType, idArg, nonNull, stringArg } from 'nexus';

export const TaskMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTask', {
      type: 'Task',
      args: {
        title: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      resolve(_root, args, ctx) {
        const task = ctx.db.task.create({
          data: { ...args, userId: 'afb96a1b-4d64-59ea-b6ed-9970c6e91107' },
        });
        return task;
      },
    });
    t.nonNull.field('deleteTask', {
      type: 'Task',
      args: {
        id: nonNull(idArg()),
      },
      resolve(_root, args, ctx) {
        const task = ctx.db.task.delete({
          where: { id: args.id },
        });
        return task;
      },
    });
  },
});
