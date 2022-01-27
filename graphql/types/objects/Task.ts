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
      resolve() {
        return [
          {
            id: 'f28304dc-ea55-5dd3-83b7-7ed728815c6d',
            title: 'Nexus',
            description: '...',
          },
        ];
      },
    });
  },
});
