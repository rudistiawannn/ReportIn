/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
// /* eslint-disable prefer-destructuring */
// eslint-disable-next-line eol-last, no-unused-vars

const express = require('express');
require('dotenv').config();

const app = express();

// const PORT = process.env.PORT;
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Ini halaman utama');
});

app.listen(PORT, () => {
  console.log(`Express API running in port ${PORT}`);
});
