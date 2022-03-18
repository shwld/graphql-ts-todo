import { Button, useColorModeValue } from '@chakra-ui/react';
import { ComponentProps, VFC } from 'react';
import { useDeleteTaskMutation } from '../../../../generated/graphql';

const PresentationalDeleteTaskButton: VFC<ComponentProps<typeof Button>> = (
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
      Delete Task
    </Button>
  );
};

export const DeleteTaskButton: VFC<{ id: string }> = ({ id }) => {
  const [result, deleteTask] = useDeleteTaskMutation();
  return (
    <PresentationalDeleteTaskButton
      disabled={result.fetching}
      onClick={() => {
        deleteTask({
          id,
        });
      }}
    />
  );
};
