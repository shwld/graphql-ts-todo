import { Button, useColorModeValue } from '@chakra-ui/react';
import { VFC } from 'react';
import { useDeleteTaskMutation } from '../../generated/graphql';

export const DeleteTaskButton: VFC<{ id: string }> = ({ id }) => {
  const [result, deleteTask] = useDeleteTaskMutation();
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
        deleteTask({
          id,
        });
      }}
    >
      + Delete Task
    </Button>
  );
};
