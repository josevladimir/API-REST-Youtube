const express = require('express');
const Router = express.Router();
const controller = require('../controllers/productController');

Router.get('/',controller.index)
      .post('/',controller.create)
      .get('/:id',controller.show)
      .put('/:id',controller.update)
      .delete('/:id',controller.remove);

module.exports = Router;