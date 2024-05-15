const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    categories: [ {Category: 
                { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }}],
    Orders :[{Order:
                {type : mongoose.Schema.Types.ObjectId, ref :'Order'}}],
    cart:{type: mongoose.Schema.Types.ObjectId, ref :'Cart'}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
