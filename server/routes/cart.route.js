
const router = require('express').Router();

const cartController = require('../controllers/cart.controller');
const authController = require('../controllers/auth.controller');


router.get('/', authController.requireAuth, cartController.getCartItems,);

router.post("/:productId", authController.requireAuth, cartController.addCartItem);

router.delete('/:productId', authController.requireAuth, cartController.removeCartItem,);


module.exports = router;