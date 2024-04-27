const clientsRoute = require('../clients/Router');

module.exports = function (app) {
    app.use('/', clientsRoute)

}

