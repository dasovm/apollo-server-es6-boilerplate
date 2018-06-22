import { ApolloServer, gql } from 'apollo-server';
import glue from 'schemaglue';
import fs from 'fs';

const { schema, resolver } = glue('./src/graphql');

fs.writeFile('./src/generated.graphql', schema, 'utf8', err => {
  if (err) return console.error(err);
  console.info('📝 Saved generated.graphql');
  return true;
});

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers: resolver,
});

server.listen().then(({ url }) => {
  console.info(`🍺 Server ready at ${url}`);
});
