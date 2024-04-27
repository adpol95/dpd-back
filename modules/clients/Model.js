const mongoose = require('mongoose');

const {Schema} = mongoose;

const clientSchema = new Schema({
    gender: {
        type: String,
        required: true,
    },
    name: {
        type: Object,
        required: true,
    },
    location: {
        type: Object,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    login: {
        type: Object,
        required: true,
    },
    dob: {
        type: Object,
        required: true,
    },
    registered: {
        type: Object,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    cell: {
        type: String,
        required: true,
    },
    id: {
        type: Object,
        required: true,
    },
    picture: {
        type: Object,
        required: true,
    },
    nat: {
        type: String,
        required: true,
    },


});

module.exports = clientSchema;
