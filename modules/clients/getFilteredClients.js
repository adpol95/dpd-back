const Clients = require('./Model');
const mongoose = require("mongoose");
const clientModel = mongoose.model('Clients', Clients);

module.exports = async function (req, res) {
    const basicKeys = [
        "gender",
        "name.first",
        "name.last",
        "location.country",
        "email",
        "login.username",
        "dob.date",
        "dob.age",
        "phone",
        "cell",
        "nat"
    ];
    let breaker = false;
    const firstLetterUp = req.body.title.replace(/\b\w/gi,(el) => el.toUpperCase());
    const exacDataRes = "gender name location.country dob.date phone cell picture.medium";
    for (let i = 0; i < basicKeys.length; i++) {
        if (breaker) break;
        else {
            if (req.body.title.includes(" ")) {
                const FIO = req.body.title.split(" ").map(el => el[0].toUpperCase() + el.slice(1));
                await clientModel.find({"location.country": firstLetterUp}, exacDataRes)
                    .exec()
                    .then((resp) => {
                        if (resp.length) {
                            breaker = true;
                            return res.status(200).json(resp);
                        }
                    })
                    .catch((err) => res.status(400).json(err))
                await clientModel.find({
                    name: {
                        title: "Mr",
                        first: FIO[0],
                        last: FIO[1]
                    }
                }, exacDataRes)
                    .exec()
                    .then((resp) => {
                        if (resp.length) {
                            breaker = true;
                            return res.status(200).json(resp);
                        }
                    })
                    .catch((err) => res.status(400).json(err))
                await clientModel.find({
                    name: {
                        title: "Ms",
                        first: FIO[0],
                        last: FIO[1]
                    }
                }, exacDataRes)
                    .exec()
                    .then((resp) => {
                        if (resp.length) {
                            breaker = true;
                            return res.status(200).json(resp);
                        }
                    })
                    .catch((err) => res.status(400).json(err))
                await clientModel.find({
                    name: {
                        title: "Mr",
                        first: FIO[1],
                        last: FIO[0]
                    }
                }, exacDataRes)
                    .exec()
                    .then((resp) => {
                        if (resp.length) {
                            breaker = true;
                            return res.status(200).json(resp);
                        }
                    })
                    .catch((err) => res.status(400).json(err))
                await clientModel.find({
                    name: {
                        title: "Ms",
                        first: FIO[1],
                        last: FIO[0]
                    }
                }, exacDataRes)
                    .exec()
                    .then((resp) => {
                        if (resp.length) {
                            breaker = true;
                            return res.status(200).json(resp);
                        } else if (i === basicKeys.length - 1) {
                            return res.status(400).json("Пользователей по данному ключевому слову не найдено")
                        }
                    })
                    .catch((err) => res.status(400).json(err))
            } else {
                await clientModel.find({[basicKeys[i]]: i === 3 ? firstLetterUp : req.body.title}, exacDataRes)
                    .exec()
                    .then((resp) => {
                        if (resp.length) {
                            breaker = true;
                            return res.status(200).json(resp);
                        } else if (i === basicKeys.length - 1) {
                            return res.status(400).json("Пользователей по данному ключевому слову не найдено")
                        }
                    })
                    .catch((err) => res.status(400).json(err))
            }
        }
    }

}
