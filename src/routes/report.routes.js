/* eslint-disable linebreak-style */
const express = require('express');
const productController = require('../controllers/report.controller');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ini halaman utama');
});

app.use('/report', productController);

module.exports = app;
