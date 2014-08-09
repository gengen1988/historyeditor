var express = require('express');
var path = require('path');
var app = express();
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'www')));
