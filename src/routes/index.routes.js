/* eslint-disable linebreak-style */
const express = require('express');
const reportRouter = require('./report.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use('/user', userRouter);

app.use('/', reportRouter);

module.exports = app;
