var express = require('express');
var router = express.Router();

//require flight controller module
const flightCtrl = require('../controllers/flights');

//GET route for flights/new
router.get('/new', flightCtrl.new);

//POST route for /flights
router.post('/', flightCtrl.create);

//GET route for all flights
router.get('/', flightCtrl.index);

module.exports = router;
