/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const createError = require('http-errors');
const auth = require('../service/auth.service');

class authController {
  static register = async (req, res, next) => {
    try {
      const user = await auth.register(req.body);
      res.status(200).send({
        status: true,
        message: 'User created successfully',
        data: user,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };

  static login = async (req, res, next) => {
    try {
      const data = await auth.login(req.body);
      res.status(200).send({
        status: true,
        message: 'Account login successful',
        data,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };

  static all = async (req, res, next) => {
    try {
      const users = await auth.all();
      res.status(200).send({
        status: true,
        message: 'All users',
        data: users,
      });
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  };
}
module.exports = authController;
