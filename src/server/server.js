'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(PORT, function () {
    console.log(`find me on port ${PORT}!`);
});
