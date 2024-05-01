const Clients = require('./Model');
const mongoose = require("mongoose");
const clientModel = mongoose.model('Clients', Clients);

module.exports = function (req, res) {
    const exacDataRes = "gender name location.country email dob phone cell picture.medium";
    clientModel.find({}, exacDataRes, { skip: 20 * req.body.page, limit: 20 }).sort({[req.body.sort]: 1})
        .exec()
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json(err))
}