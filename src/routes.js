import Router from 'express'
import productController from '../src/controllers/productController'
import usersController from '../src/controllers/usersController'
import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const route = new Router()

const upload = multer(uploadConfig)

route.get('/', productController.getAll)
route.delete('/delete/:id', productController.deleteOne)
route.put('/update/:id', productController.updateOne)
route.post('/register', upload.single('image'), productController.create)
route.get('/lista/:id', productController.getById)

route.post('/user-register', usersController.create)
route.get('/users', usersController.getAll)
route.post('/login', usersController.login)
route.get('/users/:id', usersController.getById)
route.delete('/users-del/:id', usersController.deleteOne)
route.put('/users-update/:id', usersController.updateOne)

export default route
