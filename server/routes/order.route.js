
const router = require('express').Router();

const orderController = require('../controllers/order.controller')
const authController = require('../controllers/auth.controller');


router.post("/", authController.requireAuth, orderController.newOrderTransaction)

router.get("/", authController.requireAuth, orderController.getOrdersByUserId)

router.get('/:id', authController.requireAuth, orderController.getOrderById)

module.exports = router;