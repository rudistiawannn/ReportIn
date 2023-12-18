/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
const express = require('express');
const reportRouter = require('./report.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const auth = require('../middleware/auth.midleware');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

const app = express();

app.use(express.json());
app.use(cookieParser());

const thrtyMinutes = 1000 * 60 * 30;
app.use(sessions({
  secret: 'thisismysecrctekeyfhrgfgrfrty84fwir1987',
  saveUninitialized: true,
  cookie: { maxAge: thrtyMinutes },
  resave: false,
}));

app.use('/auth', authRouter);

app.use('/user', auth, userRouter);

// app.use('/tmp', express.static(path.join(__dirname, './assets')));

app.use('/', auth, reportRouter);

module.exports = app;
