import usersModel from '../models/usersModel'
import md5 from 'md5'
import dotenv from 'dotenv'
import send from '../services/email-service'
import { generateToken } from '../services/token'

dotenv.config()

async function login(req, res) {
  try {
    const { email, password } = req.body

    const data = await usersModel.findOne({
      email,
      password: md5(password, process.env.GLOBAL_SALTKEY),
    })

    const token = await generateToken(data)

    return res.status(201).send({ data, token })
  } catch (error) {
    return res.status(400).send(data, token)
  }
}

async function create(req, res) {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    }

    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALTKEY),
    })

    const token = await generateToken(data)

    send(req.body)

    console.log(token)

    return res
      .status(201)
      .send({ msg: 'Usuario cadastrado com sucesso!', token })
  } catch (error) {
    return res.status(400).send({ msg: 'Error, tudo cagado!' })
  }
}

async function getAll(req, res) {
  try {
    const data = await usersModel.find()

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req, res) {
  try {
    const data = await usersModel.findById(req.params.id)

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function deleteOne(req, res) {
  try {
    await usersModel.findByIdAndDelete(req.params.id)

    return res.status(201).send({ msg: 'Tudo apagado!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO, Tudo cagado!!!' })
  }
}

async function updateOne(req, res) {
  try {
    await usersModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password, process.env.GLOBAL_SALTKEY),
      },
    })

    return res.status(201).send({ msg: 'usuario Editado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO, tudo cagado!', error })
  }
}

export default { create, login, getAll, getById, deleteOne, updateOne }
