var express = require('express');
var router  = express.Router();

const apiControllers = require('../controllers/api-controllers');

router.get('/parking', apiControllers.parking);


module.exports = router;