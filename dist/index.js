'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const app = (0, _express2.default)();

_mongoose2.default.connect(process.env.DATABASE_CONNECTION);

app.use(_express2.default.json());
app.use((0, _cors2.default)());
app.use('/', _routes2.default);

app.use('/files', _express2.default.static(_path2.default.resolve(__dirname, '..', 'uploads')));

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`API Running on Port: ${PORT}`);
});

exports.default = app;