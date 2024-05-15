const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    Category: { type: String, required: true, unique: true },
    Items :[{Item:
            { type: mongoose.Schema.Types.ObjectId, ref: 'Item'}} ]

});


const Category = mongoose.model('Category',categorySchema);

module.exports = Category;
