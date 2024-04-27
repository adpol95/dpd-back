const parseResponse = require('./modules/core/parseResonse');
const logger = require('./modules/core/logger');
const dbConnection = require('./modules/core/db');
const errorHandler = require('./modules/core/errorHandler');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const createClients = require('./modules/clients/createClients');


const express = require('express');
const app = express();
const PORT = 5000;


logger(app);
parseResponse(app);
dbConnection(app);
cors(app);
routes(app);
errorHandler(app);

createClients()
    .then(() => {
        console.log('База клиентов сформирована')
    })
    .catch((err) => {
        console.log(err);
    })


app.listen(PORT, () => {
    console.log(`Examples for host ${PORT}`)
})