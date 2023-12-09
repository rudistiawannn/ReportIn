/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const express = require('express');
const { getAllUser, createdUser } = require('../service/user.service');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await getAllUser();
    res.send({
      status: 200,
      data: user,
    });
  } catch (error) {
    throw Error(error);
  }
});

router.post('/register', async (req, res) => {
  try {
    const data = req.body;
    const postUser = await createdUser(data);
    res.send({
      data: postUser,
      status: 200,
    });
  } catch (error) {
    throw Error(error);
  }
});

module.exports = router;
