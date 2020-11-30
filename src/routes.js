import Router from 'express'
import productController from '../src/controllers/productController'
import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const route = new Router()

const upload = multer(uploadConfig)

route.get('/', productController.getAll)
route.delete('/delete/:id', productController.deleteOne)
route.put('/update/:id', productController.updateOne)
route.post('/register', upload.single('image'), productController.create)

export default route
