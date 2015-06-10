"use strict";

var express = require('express');
var path = require('path');
var app = express();

// middleware http://expressjs.com/3x/api.html#middleware
app.use(express.favicon());
app.use(express.logger('dev'));

app.use(express.static(path.join(__dirname, 'public/examples')));
app.use(express.directory('public/examples', {icons: true}));

['css', 'data', 'images', 'js', 'libs'].forEach(function (item) {
    app.use('/'+item, express.static(path.join(__dirname, 'public/'+item)));
});

module.exports = app;