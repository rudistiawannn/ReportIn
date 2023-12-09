/* eslint-disable linebreak-style */
const prisma = require('../config/db.config');

const findAllUser = async () => {
  const getAllUser = await prisma.role.findMany({
    include: {
      User: true,
    },
  });
  return getAllUser;
};

const addedUser = async (data, roleLevel) => {
  const addUser = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      age: data.age,
      gender: data.gender,
      role: {
        connect: {
          level: roleLevel,
        },
      },
    },
  });
  return addUser;
};

module.exports = { findAllUser, addedUser };
