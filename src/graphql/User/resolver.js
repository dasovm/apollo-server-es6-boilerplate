import { getUsers, getUser, createUser } from "../../data/user";
import { getPostsByUser } from "../../data/post";

export const resolver = {
  User: {
    posts: async ({ id }) => getPostsByUser(id),
  },
  Query: {
    allUsers: async () => getUsers(),
    user: async (_, { id }) => getUser(id),
  },
  Mutation: {
    createUser: async (_, { name }) => createUser(name),
  }
};
