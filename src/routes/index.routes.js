/* eslint-disable linebreak-style */
const express = require('express');
const reportController = require('../controllers/report.controller');
const registerController = require('../controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ini halaman utama');
});

app.use('/report', reportController);

app.use('/user', registerController);

module.exports = app;
