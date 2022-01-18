// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { schema } from '../../graphql/schema';
import { RequestHandler } from 'micro';

const apolloServer = new ApolloServer({ schema });

let apolloServerHandler: RequestHandler;

const cors = Cors();

async function getApolloServerHandler(): Promise<RequestHandler> {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: '/api/graphql',
    });
  }

  return apolloServerHandler;
}

type Data = {
  name: string;
};

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