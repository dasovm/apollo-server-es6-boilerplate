import users from './users';

const getUsers = async () => users;

const getUser = async id => {
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].id === id) return users[i];
  }
  return null;
};

export {
  getUsers,
  getUser,
};
