'use strict';

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sharp = require('sharp');

var _sharp2 = _interopRequireDefault(_sharp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  storage: new _multer2.default.diskStorage({
    destination: _path2.default.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, cb) {
      const [name] = file.originalname.split('.');
      const filename = `${name}.jpg`;
      cb(null, filename);
    }
  })

  // export default {
  //   // eslint-disable-next-line new-cap
  //   storage: new multer.diskStorage({
  //     destination: path.resolve(__dirname, '..', '..', 'uploads'),
  //     filename: (req, file, cb) => {
  //       cb(null, file.originalname)
  //     },
  //   }),
  // }

};