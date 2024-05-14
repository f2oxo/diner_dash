const mongoose = require('mongoose');
require ("mongoose-type-email");

const userSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName : {type : string, required: true},
    email :{type : mongoose.SchemaTypes.Email , required: true},
    password:{type : string , required: true},
    Roles:{type: string , required:true},
    Address:{type: string , required: true}

});
