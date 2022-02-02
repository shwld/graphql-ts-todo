import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { VFC } from 'react';
import { TaskSummaryFragment } from '../../generated/graphql';

export const TaskSummaryCard: VFC<{ task: TaskSummaryFragment }> = ({
  task,
}) => {
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
            {task.title}aaaaaaaaaaaaa
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
      </Flex>
    </Box>
  );
};
