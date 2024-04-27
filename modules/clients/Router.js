const { Router } = require('express');
const clientsAll = require("./getAllClients");
const clientsResponsible = require("./getResponsibleClients");

const router = Router();

router.get('/', clientsAll);
router.post('/test', clientsResponsible);

module.exports = router;