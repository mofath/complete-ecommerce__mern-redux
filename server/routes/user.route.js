const router = require('express').Router();

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');



router.get('/',  userController.getAllUsers);

router.delete('/:id', userController.deleteUser)

router.patch('/:id', authController.requireAuth, authController.requireAdmin, userController.modifyUser)

router.get('/count', authController.requireAuth, authController.requireAdmin, userController.countUsers)


module.exports = router;


// authController.requireAuth, authController.requireAdmin, 