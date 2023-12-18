/* eslint-disable linebreak-style */
const prisma = require('../config/db.config');

// eslint-disable-next-line consistent-return
const verifyRegister = (req, res, next) => {
  try {
    // Username
    let user = prisma.user.findFirst({
      where: {
        username: req.body.username,
      },
    });
    if (user) {
      return res.status(400).send({
        message: 'Failed! Username is already in use!',
      });
    }

    // Email
    user = prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      return res.status(400).send({
        message: 'Failed! Email is already in use!',
      });
    }

    return next();
  } catch (error) {
    return res.status(500).send({
      message: 'Unable to validate Username!',
    });
  }
};

module.exports = verifyRegister;
