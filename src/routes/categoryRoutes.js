const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, categoryController.createCategory);
router.put('/:categoryId', authMiddleware, categoryController.updateCategory);
router.put('/:categoryId/items/add', authMiddleware, categoryController.addItemToCategory);
router.put('/:categoryId/items/remove/:itemId', authMiddleware, categoryController.removeItemFromCategory);

module.exports = router;
