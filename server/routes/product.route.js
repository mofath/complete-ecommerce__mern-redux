
const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const authController = require('../controllers/auth.controller');


router.get('/', productController.getAllProducts);

router.post("/", productController.addNewProduct)

router.get('/:id', productController.getProductById)

router.delete('/:id',   productController.deleteProductBtId)

router.post("/products", productController.filterProducts);

router.get('/price-range', productController.getProductsPriceRange)


module.exports = router; 

// authController.requireAuth, authController.requireAdmin,