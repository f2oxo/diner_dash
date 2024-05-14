const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['placed', 'processing', 'completed'], default: 'placed' },
    totalPrice: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
