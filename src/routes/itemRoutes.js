const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/:itemId', itemController.getItemById);
router.get('/category/:category', itemController.getItemsByCategory);

module.exports = router;
