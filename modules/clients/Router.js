const { Router } = require('express');
const clientsAll = require("./getAllClients");

const router = Router();

router.get('/', clientsAll);

module.exports = router;