import { Box, useColorModeValue } from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';

const Card: VFC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Box
      maxW={'400px'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflowY={'scroll'}
      display="flex"
      flexDirection="column"
      gap={3}
      p={6}
    >
      {children}
    </Box>
  );
};

export default Card;
