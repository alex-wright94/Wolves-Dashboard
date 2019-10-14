console.log("inside of MongoJs");

const mongoose = require("mongoose");



module.exports = function(DB_NAME) {
    mongoose.connect('mongodb://localhost/{DB_NAME}', {useNewUrlParser: true});
    require('../models/wolf');
}

