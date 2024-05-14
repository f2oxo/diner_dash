const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/items', authMiddleware, adminController.createItem);
router.put('/items/:itemId', authMiddleware, adminController.updateItem);

module.exports = router;
