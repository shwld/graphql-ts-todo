import { AddTaskButton } from '../CreateTaskButton';
import Card from '../../../shared/Card';
import { DeleteTaskButton } from '../DeleteTaskButton';
import { filterOfPresentation } from '../../../../functions/filterOfPresentation';
import { useTaskListQuery, TaskListCardFragment } from './taskList.generated';
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Input,
} from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';

const TaskCard: VFC<{
  task: TaskListCardFragment;
  children?: ReactNode;
  onUpdate?(task: TaskListCardFragment): void;
}> = ({ task, children, onUpdate }) => {
  return (
    <Box
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      <Flex p={6} justify="space-between">
        <Stack>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            <Input
              value={task.title ?? ''}
              onChange={(e) => {
                const newTitle = e.target.value;
                if (onUpdate) {
                  onUpdate({
                    ...task,
                    title: newTitle,
                  });
                }
              }}
            />
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

        {children}
      </Flex>
    </Box>
  );
};

export const TaskList: VFC<{ children?: ReactNode }> = ({ children }) => {
  const [res] = useTaskListQuery();
  return (
    <>
      {filterOfPresentation(res.data?.tasks ?? []).map((task) => (
        <TaskCard key={task.id} task={task!}>
          <Button
            w={100}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Done
          </Button>
        </TaskCard>
      ))}
    </>
  );
};
