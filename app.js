const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const ProductR = require('./routes/products');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/products',ProductR);

module.exports = App;