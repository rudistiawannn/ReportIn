/* eslint-disable linebreak-style */
const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middleware/auth.midleware');
const verifyRegister = require('../middleware/verifyRegister.midleware');

router.post('/register', verifyRegister, user.register);

router.post('/login', user.login);
// all users guard
router.get('/', auth, user.all);

router.get('/logout', (req, res) => {
  try {
    delete req.session.userId;
    res.clearCookie('accessToken');
    res.clearCookie('connect.sid');
    req.session.destroy();
    res.json({
      status: 200,
      message: 'Log out has been successfull',
    });
  } catch (e) {
    res.json({ result: 'ERROR', message: 'User is not logged in.' });
  }
});

module.exports = router;
