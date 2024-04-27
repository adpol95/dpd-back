const mongoose = require("mongoose");

const clientSchema = require('./Model');

const clientModel = mongoose.model('Clients', clientSchema);
const fullNamesData = {
    lName: ["Смирнов", "Иванов", "Кузнецов", "Соколов", "Попов", "Лебедев", "Журавлёв", "Николаев", "Белоусов", "Бобров", "Атонов", "Воронов", "Чернов", "Жданов", "Киркоров", "Лепс", "Мамонтов", "Фомичёв", "Сазонов", "Евсеев"],
    fName: ["Антон", "Матвей", "Прохор", "Пётр", "Максим", "Никита", "Арсений", "Фрол", "Глеб", "Владислав", "Атон", "Сергей", "Павел", "Егор", "Олег", "Александр", "Валерьян", "Виталий", "Лев", "Тихон"],
    sName: ["Арсенович", "Викторович", "Ильич", "Кириллович", "Владимирович", "Бориславич", "Алексеевич", "Гордеевич", "Макарович", "Павлович", "Атонович", "Денисович", "Давидович", "Августович", "Геннадьевич", "Артурович", "Леонович", "Захарович", "Гордеевич", "Фёдорович"]
}
const users = ["Колесников Виталий Кириллович", "Лобанов Андрей Юрьевич", "Атонов Атон Атонович"];

module.exports = async function () {
    const mongoHasData = await clientModel.find();
    if (!!mongoHasData[0] === false) {
        for (let i = 0; i < fullNamesData.lName.length; i++) {
            const client = new clientModel({
                accountNumber: Math.floor((Math.random() * 100000000) + 1),
                lastName: fullNamesData.lName[i],
                firstName: fullNamesData.fName[i],
                surName: fullNamesData.sName[i],
                birthDay: `${Math.floor((Math.random() * 30) + 1)}.${Math.floor((Math.random() * 12) + 1)}.${Math.floor((Math.random() * 50) + 1) + 1950}`,
                tin: Math.floor((Math.random() * 1000000000000) + 1),
                responsibleFullName: users[Math.floor(Math.random() * 3)],
                status: "Не в работе",
            })
            await client
                .save()
                .then(() => {
                    console.log(fullNamesData.lName[i]);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}