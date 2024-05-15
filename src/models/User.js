const mongoose = require('mongoose');
require ("mongoose-type-email");

const userSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    username : {type : String, required: true},
    email :{type : mongoose.SchemaTypes.Email , required: true},
    password:{type : String , required: true},
    Role:{type: String ,enum :["user","admin"]},
    Address:{type: String },
    Cart :{type : mongoose.Schema.Types.ObjectId,ref: 'Cart'},
    Order:{type : mongoose.Schema.Types.ObjectId,ref:'Order'}

});
const User =mongoose.model('User',userSchema);

module.exports = User;
