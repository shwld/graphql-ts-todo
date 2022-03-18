import { Box, useColorModeValue as colorModeValue } from '@chakra-ui/react';
import { ComponentProps, ReactNode, VFC } from 'react';

export const Card: VFC<
  ComponentProps<typeof Box> & { children?: ReactNode }
> = ({ children, ...props }) => {
  return (
    <Box
      bg={colorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      {...props}
    >
      {children}
    </Box>
  );
};
