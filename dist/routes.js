'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productController = require('../src/controllers/productController');

var _productController2 = _interopRequireDefault(_productController);

var _uploadConfig = require('./config/uploadConfig');

var _uploadConfig2 = _interopRequireDefault(_uploadConfig);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = new _express2.default();

const upload = (0, _multer2.default)(_uploadConfig2.default);

route.get('/', _productController2.default.getAll);
route.delete('/delete/:id', _productController2.default.deleteOne);
route.put('/update/:id', _productController2.default.updateOne);
route.post('/register', upload.single('image'), _productController2.default.create);
route.get('/lista/:id', _productController2.default.getById);

exports.default = route;