import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { RequestHandler } from 'micro';
import { context } from '../../graphql/context';
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../generated/typeDefs';

const apolloServer = new ApolloServer({ typeDefs, context, resolvers });

let apolloServerHandler: RequestHandler;

const cors = Cors();

async function getApolloServerHandler(): Promise<RequestHandler> {
  if (apolloServerHandler == null) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: '/api/graphql',
    });
  }

  return apolloServerHandler;
}

const handler: RequestHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

export default cors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
