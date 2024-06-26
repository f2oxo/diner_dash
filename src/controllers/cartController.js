const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body;

        let cart = await cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({
                user: userId,
                items: [{ item: itemId, quantity }]
            });
        } else {
            const itemIndex = cart.items.findIndex(item => item.item.toString() === itemId);
            if (itemIndex !== -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ item: itemId, quantity });
            }
        }

        await cart.save();

        res.json({ message: 'Item added to cart successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCartByUserId = async (req, res) => {
    try {
        const cart = await cart.findOne({ user: req.params.userId });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getCartByUserId , addToCart};
