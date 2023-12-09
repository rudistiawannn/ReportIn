/* eslint-disable linebreak-style */

const { findAllUser, addedUser } = require('../repository/user.repository');

const getAllUser = async () => {
  const allUser = findAllUser();
  return allUser;
};

const createdUser = async (data) => {
  let roleLevel = data.role;
  if (roleLevel === '') {
    roleLevel = 'user';
  }
  const createUser = addedUser(data, roleLevel);
  return createUser;
};

module.exports = { getAllUser, createdUser };
