var express = require('express');

var routes = express.Router();

var ChallengeController = require('./controllers/ChallengeController');

routes.post('/challenge', ChallengeController.createArea);

routes.get('/challenge', ChallengeController.sendResult);

module.exports = routes;
