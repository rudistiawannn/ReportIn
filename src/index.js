/* eslint-disable linebreak-style */
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());

const routes = require('./routes/report.routes');

app.use('/', routes);

app.use((req, res) => {
  res.send('Page is not found!!');
});

app.listen(PORT, () => {
  console.log(`Express API running in port ${PORT}`);
});
