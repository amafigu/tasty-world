import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import cors from 'cors';
import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

const app = express();
app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

async function start() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app as any });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

start();
