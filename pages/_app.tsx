import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { withUrqlClient } from 'next-urql';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withUrqlClient(
  () => ({
    url: 'http://localhost:3000/api/graphql',
  }),
  { ssr: false }
)(MyApp);
