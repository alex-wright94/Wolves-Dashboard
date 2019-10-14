console.log("inside of wolfs.js");

const Wolf = mongoose.model('Wolf');
const Wolfs = require('../controllers/wolfs');

class WolfController {
    index(req, res) {
        Wolf.find({})
        .then(wolfs => res.render("index", {wolfs}))
        .catch(err => {
            console.log(err);
            res.render("index", {wolfs: []});
        });
    }
    create(req, res) {
        console.log(req.body);
        let wolf = new Wolf(req.body);
        wolf.save()
            .then(res.redirect("/"))
            .catch(err => res.json(err));
    }
    show(req, res){
        Wolf.findById({_id: req.params._id})
            .then(wolf => res.render("show", {wolf}))
            .catch(err => res.json(err));
    }
}

module.exports = new WolfController();