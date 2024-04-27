const bodyParser = require('body-parser');


module.exports = function parseResponse(app) {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
}