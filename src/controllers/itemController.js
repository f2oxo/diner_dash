const Item = require('../models/Item');

const getItemById = async (req, res) => {
    try {
        const item = await item.findById(req.params.itemId);
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItemsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const items = await item.find({ category });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const { name, description, price, categories } = req.body;

        const item = new item({
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


module.exports = {getItemById , getItemsByCategory};