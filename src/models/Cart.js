const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    Cart:{type:mongoose.Schema.Types.ObjectId},
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    iItems: [{
        Item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true }
    }]
});



const Cart =  mongoose.model('Cart',cartSchema);

module.exports = Cart;