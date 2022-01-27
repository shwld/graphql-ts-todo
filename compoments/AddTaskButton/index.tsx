import { Button, useColorModeValue } from '@chakra-ui/react';
import { VFC } from 'react';
import {
  TaskSummaryFragment,
  useCreateTaskMutation,
} from '../../generated/graphql';

export const AddTaskButton: VFC = () => {
  const [result, createTask] = useCreateTaskMutation();
  return (
    <Button
      disabled={result.fetching}
      w={100}
      bg={useColorModeValue('#151f21', 'gray.900')}
      color={'white'}
      rounded={'md'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      onClick={() => {
        createTask({
          title: '',
          description: '',
        });
      }}
    >
      + Add Task
    </Button>
  );
};
