var express = require('express');
var router  = express.Router();

const apiControllers = require('../controllers/api-controllers');

router.get('/parking', apiControllers.parking);

router.get('/park', apiControllers.park);

router.get('/parkingvelos', apiControllers.parkingVelo);

router.get('/stopstan', apiControllers.stopStan);


module.exports = router;