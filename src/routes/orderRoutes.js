const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, orderController.placeOrder);
router.put('/:orderId', authMiddleware, orderController.updateOrderStatus);
router.get('/:orderId', authMiddleware, orderController.getOrderById);

module.exports = router;
