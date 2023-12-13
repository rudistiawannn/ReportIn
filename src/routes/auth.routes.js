/* eslint-disable linebreak-style */
const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middleware/auth.midleware');
const verifyRegister = require('../middleware/verifyRegister.midleware');

router.post('/', verifyRegister, user.register);

router.post('/login', user.login);
// all users guard
router.get('/', auth, user.all);

module.exports = router;
