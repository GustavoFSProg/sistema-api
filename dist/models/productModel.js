'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

const schema = new _mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  description: String,
  price: Number,
  image: String
});

exports.default = (0, _mongoose.model)('productModel', schema);