const { Router } = require('express');
const clientsAll = require("./getAllClients");
const clientsResponsible = require("./getResponsibleClients");
const clientStatusChange = require("./changeClientStatus");

const router = Router();

router.get('/', clientsAll);
router.post('/responsible', clientsResponsible);
router.patch('/:cardId', clientStatusChange);

module.exports = router;