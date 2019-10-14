mongoose = require("mongoose");
const Wolf = mongoose.model('Wolf');

const Wolfs = require('../controllers/wolfs');


module.exports = function(app){
    app.get("/", Wolfs.index );
    app.post("/create",Wolfs.create);
    app.get("/wolf/:_id", Wolfs.show);
}
