const Clients = require('./Model');
const mongoose = require("mongoose");
const clientModel = mongoose.model('Clients', Clients);

module.exports = async function (req, res) {
    const basicKeys = [
        "gender",
        "name.title",
        "name.first",
        "name.last",
        "location.street.number",
        "location.street.name",
        "location.city",
        "location.state",
        "location.country",
        "location.postcode",
        "location.coordinates.latitude",
        "location.coordinates.longitude",
        "location.timezone.offset",
        "location.timezone.description",
        "email",
        "login.username",
        "dob.age",
        "phone",
        "cell",
        "id.name",
        "nat"
    ];
    let breaker = false;

    for (let i = 0; i < basicKeys.length; i++) {
        if (breaker) break;
        else {
            await clientModel.find({[basicKeys[i]]: req.body.title})
                .exec()
                .then((resp) => {
                    if (resp.length) {
                        breaker = true;
                        return res.status(200).json(resp);
                    }
                })
                .catch((err) => res.status(400).json(err))
        }
    }

}
