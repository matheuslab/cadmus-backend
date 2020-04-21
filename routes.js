var express = require('express');

var routes = express.Router();

routes.post('/challenge', function (request, response) {
    var data = request.body;

    console.log(data);

    return response.json();
});

module.exports = routes;
