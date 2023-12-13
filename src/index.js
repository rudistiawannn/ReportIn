/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
// /* eslint-disable prefer-destructuring */
// eslint-disable-next-line eol-last, no-unused-vars

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT  = process.env.PORT;
// const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ini halaman utama');
});

const productController = require('./report/reportController');

app.use('/report', productController);

app.listen(PORT, () => {
  console.log(`Express API running in port ${PORT}`);
});

app.use((req, res) => {
  res.send('Page is not found!!');
});
