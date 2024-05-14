const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Item', itemSchema);
