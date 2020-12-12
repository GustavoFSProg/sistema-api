import Router from 'express'
import productController from '../src/controllers/productController'
import usersController from '../src/controllers/usersController'
import uploadConfig from './config/uploadConfig'
import multer from 'multer'
import Authorize from '../src/services/auth'

const route = new Router()

const upload = multer(uploadConfig)

route.get('/', productController.getAll)
route.delete('/delete/:id', Authorize, productController.deleteOne)
route.put('/update/:id', productController.updateOne)
route.post('/register', upload.single('image'), productController.create)
route.get('/lista/:id', productController.getById)

route.post('/user-register', Authorize, usersController.create)
route.get('/users', Authorize, usersController.getAll)
route.post('/login', usersController.login)
// route.get('/users/:id', Authorize, usersController.getById)
route.delete('/users-del/:id', Authorize, usersController.deleteOne)
route.put('/users-update/:id', Authorize, usersController.updateOne)

export default route
