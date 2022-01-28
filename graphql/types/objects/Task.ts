import { extendType, objectType } from 'nexus';

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('description');
  },
});

export const TaskQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('tasks', {
      type: 'Task',
      resolve(_root, args, ctx) {
        return ctx.db.task.findMany();
      },
    });
  },
});
