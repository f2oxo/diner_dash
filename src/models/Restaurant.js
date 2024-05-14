const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    branchID: {type: mongoose.Schema.Types.ObjectId , required: true},
    name : {type: sting , required: true},
    city : {type: string , required: true},
    phone:{type : string , unique : ["Phone no already in use"], required: true}

});