import { withUrqlClient, WithUrqlClientOptions } from 'next-urql';
import { dedupExchange, cacheExchange, fetchExchange } from '@urql/core';

export const withClient = (options: WithUrqlClientOptions = { ssr: true }) =>
  withUrqlClient(
    () => ({
      url: 'http://localhost:3000/api/graphql',
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
    }),
    options
  );
