const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    try {
        const { name, description, price, categories } = req.body;

        const item = new Item({
            name,
            description,
            price,
            categories
        });

        await item.save();

        res.json({ message: 'Item created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const { itemId } = req.params;
        const { name, description, price, categories } = req.body;

        await Item.findByIdAndUpdate(itemId, { name, description, price, categories });

        res.json({ message: 'Item updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
