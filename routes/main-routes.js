var express = require('express');
var router  = express.Router();

const mainControllers = require('../controllers/main-controllers');

router.get('/', mainControllers.showMap);

module.exports = router;