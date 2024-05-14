const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:userId', authMiddleware, userController.getUserById);
router.put('/:userId', authMiddleware, userController.updateUser);
router.get('/:userId/orders', authMiddleware, userController.getOrderHistory);

module.exports = router;
