const category = require('../models/Category');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const category = new category({
            name
        });

        await category.save();

        res.json({ message: 'Category created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { name } = req.body;

        await category.findByIdAndUpdate(categoryId, { name });

        res.json({ message: 'Category updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addItemToCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { itemId } = req.body;

        const category = await Category.findById(categoryId);
        category.items.addToSet(itemId); 
        await category.save();

        res.json({ message: 'Item added to category successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeItemFromCategory = async (req, res) => {
    try {
        const { categoryId, itemId } = req.params;

        const category = await Category.findById(categoryId);
        category.items.pull(itemId); 
        await category.save();

        res.json({ message: 'Item removed from category successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {removeItemFromCategory , addItemToCategory ,updateCategory ,createCategory};
