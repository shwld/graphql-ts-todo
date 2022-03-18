import { filterOfPresentation } from '../../../functions/filterOfPresentation';
import { useTaskListQuery, TaskListCardFragment } from './taskList.generated';
import { Heading, Avatar, Flex, Text, Stack, Input } from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';
import { Card } from '../../../compoments/Card';
import { DeleteTaskButton } from './DeleteTaskButton';

export const PresentationalTaskList: VFC<{
  tasks: TaskListCardFragment[];
  children?: ReactNode;
  renderButtonsArea?(task: TaskListCardFragment): void;
}> = ({ tasks, children, renderButtonsArea }) => {
  return (
    <Stack gap={1}>
      {tasks.map((task) => (
        <Card w={'full'} key={task.id}>
          <Flex p={6} justify="space-between">
            <Stack>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {task.title}
              </Heading>
              <Flex justify={'start'}>
                <Text color={'gray.500'}>2022/01/19</Text>
                <Avatar
                  size={'xs'}
                  src={
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                  }
                  alt={'Author'}
                  css={{
                    border: '2px solid white',
                  }}
                />
                <Text>Taro</Text>
              </Flex>
            </Stack>

            {renderButtonsArea && renderButtonsArea(task)}
          </Flex>
        </Card>
      ))}
    </Stack>
  );
};

export const TaskList: VFC<{ children?: ReactNode }> = ({ children }) => {
  const [res] = useTaskListQuery();
  return (
    <PresentationalTaskList
      tasks={filterOfPresentation(res.data?.tasks ?? [])}
      renderButtonsArea={(task) => <DeleteTaskButton id={task.id} />}
    />
  );
};
