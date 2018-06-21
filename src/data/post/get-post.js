import posts from "./posts";

const getPosts = async () => {
  return posts;
};

const getPost = async id => {
  for (let i = 0; i < posts.length; i += 1) {
    if (posts[i].id === id) return posts[i];
  };
  return null;
};

const getPostsByUser = async userId => {
  const userPosts = [];
  for (let i = 0; i < posts.length; i += 1) {
    if (posts[i].userId === userId) userPosts.push(posts[i]);
  };
  return userPosts;
}

export {
  getPosts,
  getPost,
  getPostsByUser,
};