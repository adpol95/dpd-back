const { Router } = require('express');
const clientsAll = require("./getAllClients");
const filteredClients = require("./getFilteredClients");

const router = Router();

router.post('/', clientsAll);
router.post('/filter', filteredClients);

module.exports = router;