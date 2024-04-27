// getting-started.js
const mongoose = require('mongoose');

const connectionString =
    'mongodb+srv://adpol95:MlWkg1a2F5o8FtCX@cluster0.izr2wlk.mongodb.net/dpd?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

function dbConnect() {
    mongoose
        .connect(connectionString, options)
        .then(() => console.log('Mongo connection OK'))
        .catch((err) => console.log(err));
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('CONNECTED');
    });
}

module.exports = dbConnect;