
const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews.controller');
const authController = require('../controllers/auth.controller');


router.get('/:productId', reviewsController.getProductReviews);

router.post("/", authController.requireAuth, reviewsController.submitAReview)


module.exports = router; 