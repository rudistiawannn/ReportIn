/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
const createError = require('http-errors');
const jwt = require('../utils/jwt');

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next(createError.Unauthorized(res.status(401).send({
      message: 'Login access token is required!!',
      status: 401,
    })));
  }
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return next(createError.Unauthorized());
  }
  await jwt.verifyAccessToken(token).then((user) => {
    req.user = user;
    next();
  }).catch((e) => {
    next(createError.Unauthorized(e.message));
  });
};

module.exports = auth;
