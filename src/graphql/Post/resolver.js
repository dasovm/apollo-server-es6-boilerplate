import { getPost, getPosts, createPost } from "../../data/post";
import { getUser } from "../../data/user";

export const resolver = {
  Post: {
    user: async ({ userId }) => getUser(userId)
  },
  Query: {
    allPosts: async () => getPosts(),
    post: async (_, { id }) => getPost(id)
  },
  Mutation: {
    createPost: async (_, { text, userId }) => createPost(text, userId)
  }
};
