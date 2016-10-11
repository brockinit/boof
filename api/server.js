import express from 'express';
import schema from './schema';
import resolvers from './resolvers';
import cors from 'cors';

const GRAPHQL_PORT = 8000;

const graphQLServer = express();
import graphqlHTTP from 'express-graphql';

graphQLServer.use(cors());
graphQLServer.use('/graphql', graphqlHTTP({
  schema,
  context: { resolvers },
  graphiql: true,
  pretty: true,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
