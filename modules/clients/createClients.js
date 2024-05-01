const mongoose = require("mongoose");
const data = require('./data');
const clientSchema = require('./Model');

const clientModel = mongoose.model('Clients', clientSchema);


module.exports = async function () {
    const mongoHasData = await clientModel.find();
    if (!!mongoHasData[0] === false) {
        data.results.forEach((el) => {
            const client = new clientModel({
                gender: el.gender,
                name: el.name,
                location: el.location,
                email: el.email,
                login: el.login,
                dob: el.dob.date.slice(0, el.dob.date.indexOf("T")),
                registered: el.registered,
                phone: el.phone,
                cell: el.cell,
                id: el.id,
                picture: el.picture,
                nat: el.nat
            })
            client
                .save()
                .then(() => {
                    console.log("Client " + el.name.last + " is added to DB");
                })
                .catch((err) => {
                    console.log(err);
                })
        })
    }
}