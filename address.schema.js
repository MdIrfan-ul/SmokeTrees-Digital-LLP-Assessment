const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    address:{type:String},
    contact:{type:Number},
    postalCode:{type:Number}
});

const AddressModel  = mongoose.model("Address",AddressSchema);

module.exports = AddressModel;