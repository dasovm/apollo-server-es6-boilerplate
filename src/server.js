import { ApolloServer, gql } from 'apollo-server';
import glue from 'schemaglue';

const { schema, resolver } = glue('./graphql');

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers: resolver,
  // engine: {
  //   apiKey: "<APOLLO ENGINE API KEY HERE>"
  // },
  // tracing: true,
  // cacheControl: true,
});

server.listen().then(({ url }) => {
  console.info(`🍺 Server ready at ${url}`);
});
