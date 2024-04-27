const Clients = require('./Model');
const mongoose = require("mongoose");
const clientModel = mongoose.model('Clients', Clients);

module.exports = function (req, res) {
    clientModel.find({ "name.first": req.body.title })
        .exec()
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err))
}
