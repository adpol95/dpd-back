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
        "dob",
        "phone",
        "cell",
        "nat"
    ];
    let breaker = false;
    const firstLetterUp = decodeURIComponent(req.body.title).replace(/\b\w/gi, (el) => el.toUpperCase());
    const main = decodeURIComponent(req.body.title)
    const exacDataRes = "gender name location.country email dob phone cell picture.medium";
    console.log(main)
    for (let i = 0; i < basicKeys.length; i++) {
        if (breaker) break;
        else {
            if (main.includes(" ") && !main.includes("(")) {
                const FIO = main.split(" ").map(el => el[0].toUpperCase() + el.slice(1));
                await clientModel.find({"location.country": firstLetterUp}, exacDataRes, {
                    skip: 20 * req.body.page,
                    limit: 21
                })
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
                }, exacDataRes, {skip: 20 * req.body.page, limit: 21})
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
                }, exacDataRes, {skip: 20 * req.body.page, limit: 21})
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
                }, exacDataRes, {skip: 20 * req.body.page, limit: 21})
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
                }, exacDataRes, {skip: 20 * req.body.page, limit: 21})
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
                await clientModel.find({[basicKeys[i]]: i === 3 ? firstLetterUp : main}, exacDataRes, {
                    skip: 21 * req.body.page,
                    limit: 21
                })
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
