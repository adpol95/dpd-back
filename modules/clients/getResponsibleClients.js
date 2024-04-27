const Clients = require('./Model');
const mongoose = require("mongoose");
const clientModel = mongoose.model('Clients', Clients);

module.exports = function (req, res) {
    clientModel.find({responsibleFullName: req.body.responsible})
        .exec()
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err))
}