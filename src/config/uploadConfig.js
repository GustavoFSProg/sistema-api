import multer from 'multer'
import path from 'path'
import sharp from 'sharp'
import fs from 'fs'

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, cb) {
      const [name] = file.originalname.split('.')
      const filename = `${name}.jpg`
      cb(null, filename)
    },
  }),
}

// export default {
//   // eslint-disable-next-line new-cap
//   storage: new multer.diskStorage({
//     destination: path.resolve(__dirname, '..', '..', 'uploads'),
//     filename: (req, file, cb) => {
//       cb(null, file.originalname)
//     },
//   }),
// }
