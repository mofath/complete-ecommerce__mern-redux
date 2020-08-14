const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller')



router.get('/', categoryController.getAllCategories);

router.post("/", categoryController.addNewCategory)

router.delete('/:id', categoryController.deleteCategory)

router.patch('/:id', categoryController.modifyCategory)



module.exports = router;