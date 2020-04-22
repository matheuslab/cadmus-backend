var express = require('express');
var kraken = require('kraken-js');
var routes = require('./routes');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(kraken());

let port = process.env.PORT || 3333;
app.listen(port);
