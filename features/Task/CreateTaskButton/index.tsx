import { Button, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, VFC } from 'react';
import { useCreateTaskMutation } from '../../../generated/graphql';

const PresentationalAddTaskButton: VFC<ComponentProps<typeof Button>> = (
  props
) => {
  return (
    <Button
      w={100}
      bg={useColorModeValue('#151f21', 'gray.900')}
      color={'white'}
      rounded={'md'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      {...props}
    >
      + Add Task
    </Button>
  );
};

export const AddTaskButton: VFC = () => {
  const [result, createTask] = useCreateTaskMutation();
  return (
    <PresentationalAddTaskButton
      disabled={result.fetching}
      onClick={() => {
        createTask({
          title: '',
          description: '',
        });
      }}
    />
  );
};
