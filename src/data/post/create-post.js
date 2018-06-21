import posts from "./posts";
import { getUser } from "./../user";

const createPost = async (text, userId) => {
  const user = await getUser(userId);
  if (!user) throw new Error(`Can't find any user with id ${userId}`);

  const newPost = {
    id: `${posts.length + 1}`,
    text,
    likes: 0,
    userId
  };
  posts.push(newPost);
  return newPost;
};

export {
  createPost,
};
