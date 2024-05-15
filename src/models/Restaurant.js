const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    branchID: {type: mongoose.Schema.Types.ObjectId , required: true},
    name : {type: String , required: true},
    city : {type: String , required: true},
    phone:{type : String , unique : ["Phone no already in use"], required: true}

});