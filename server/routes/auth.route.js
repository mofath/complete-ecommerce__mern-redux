const router = require('express').Router();

const validateRegister = require('../utils/register_validator')
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

router.post('/signup', validateRegister, authController.signUp);

router.post('/login', authController.login);

router.get('/authenticate', authController.requireAuth, userController.findUserById);

router.get('/logout', authController.logout);

module.exports = router;