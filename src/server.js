import { ApolloServer, gql } from "apollo-server";
import glue from "schemaglue";

const { schema, resolver } = glue('./src/graphql');

const server = new ApolloServer({
  typeDefs: gql(schema),
  resolvers: resolver,
});

server.listen().then(({ url }) => {
  console.log(`🍺 Server ready at ${url}`)
});
