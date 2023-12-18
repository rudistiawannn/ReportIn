/* eslint-disable linebreak-style */
/* eslint-disable import/order */
const prisma = require('../config/db.config');

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const createError = require('http-errors');
const { addedUser } = require('../repository/user.repository');

class AuthService {
  static async register(data) {
    let roleLevel = data.role;
    const password = bcrypt.hashSync(data.password, 8);
    if (roleLevel === '') {
      roleLevel = 'user';
    }
    const user = await addedUser(data, roleLevel, password);
    // eslint-disable-next-line no-param-reassign
    data.accessToken = await jwt.signAccessToken(user);
    return data;
  }

  static async login(data) {
    return data;
    // const user = await prisma.user.findFirst({
    //   where: {
    //     email,
    //     password,
    //   },
    // });
    // if (!user) {
    //   throw createError.NotFound('User not registered');
    // }
    // return user;
  }

  static async all() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}

module.exports = AuthService;
