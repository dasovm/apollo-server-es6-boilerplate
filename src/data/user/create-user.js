import users from './users';

const createUser = async name => {
  const newUser = {
    id: `${users.length + 1}`,
    name,
  };
  users.push(newUser);
  return newUser;
};

export {
  createUser,
};
