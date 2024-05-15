const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Order:{type: mongoose.Schema.Types.ObjectId,ref:'Order', required : true},
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, enum: ['placed', 'processing', 'completed'], default: 'placed' },
    totalPrice: { type: Number }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);


module.exports = Order;
