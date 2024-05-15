const Order = require('../models/Order');

const placeOrder = async (req, res) => {
    try {
        const { userId, items } = req.body;

        
        const order = new Order({
            user: userId,
            items,
            status: 'placed' 
        });

        await order.save();

        res.json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        await Order.findByIdAndUpdate(orderId, { status });

        res.json({ message: 'Order status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getOrderById , updateOrderStatus , placeOrder};