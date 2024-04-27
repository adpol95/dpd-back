const mongoose = require('mongoose');
const {Schema} = mongoose;

const clientSchema = new Schema({
    accountNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    surName: {
        type: String,
        required: true,
    },
    birthDay: {
        type: String,
        required: true,
    },
    tin: {
        type: Number,
        required: true,
        unique: true,
    },
    responsibleFullName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

module.exports = clientSchema;