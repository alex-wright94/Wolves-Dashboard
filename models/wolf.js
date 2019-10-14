const mongoose = require("mongoose");



const WolfSchema = new mongoose.Schema({
    name:String,
    breed:String,
    weight:Number,
}, {timestamps:true});
const Wolf = mongoose.model('Wolf', WolfSchema);