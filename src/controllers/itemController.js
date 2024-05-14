const Item = require('../models/Item');

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.itemId);
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getItemsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const items = await Item.find({ category });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
