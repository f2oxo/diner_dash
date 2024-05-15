const express = require("express");
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController');
const itemController = require('../controllers/itemController');
const cartController = require('../controllers/cartController');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');
const { auth } = require("../middleware/authMiddleware");
const router = express.Router();

router.post('/api/v1/signup', authController.signup);
router.post('/api/v1/login', authController.login);
router.post('/api/v1/cart', auth, cartController.addToCart);
router.get('/api/v1/:userId', auth, cartController.getCartByUserId);
router.put('/api/v1/:categoryId', auth, categoryController.updateCategory);
router.put('/api/v1/:categoryId/items/add', auth, categoryController.addItemToCategory);
router.put('/api/v1/:categoryId/items/remove/:itemId', auth, categoryController.removeItemFromCategory);
router.get('/api/v1/:itemId', itemController.getItemById);
router.get('/api/v1/category/:category', itemController.getItemsByCategory);
router.get('/api/v1/:userId', auth, userController.getUserById);
router.put('/api/v1/:userId', auth, userController.updateUser);
router.get('/api/v1/:userId/orders', auth, userController.getOrderHistory);
router.post('/api/v1/order', auth, orderController.placeOrder);
router.put('/api/v1/:orderId', auth, orderController.updateOrderStatus);
router.get('/api/v1/:orderId', auth, orderController.getOrderById);

// router.use('api/')



module.exports = router;
