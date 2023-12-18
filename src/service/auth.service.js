/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const prisma = require('../config/db.config');

const jwt = require('../utils/jwt');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const createHttpError = require('http-errors');
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
    const { email } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw createHttpError.NotFound('User not registered');
    }
    const checkPassword = bcrypt.compareSync(data.password, user.password);
    if (!checkPassword) throw createHttpError.Unauthorized('Email address or password not valid');
    delete user.password;
    return user;
  }

  static async all() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}

module.exports = AuthService;
