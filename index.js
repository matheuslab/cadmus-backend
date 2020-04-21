var express = require('express');
var kraken = require('kraken-js');

var app = express();

app.use(kraken());

app.get('/', function (request, response) {
    return response.json({
        stat:'bla',
        test:'bas'
    });
});

app.listen(3333);
