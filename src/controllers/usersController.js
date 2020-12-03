import usersModel from '../models/usersModel'
import md5 from 'md5'
import dotenv from 'dotenv'

dotenv.config()

async function create(req, res) {
  try {
    await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALTKEY),
    })

    return res.status(201).send({ msg: 'Usuario cadastrado com sucesso!' })
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

    return res.status(201).send({ msg: 'Tudo apagado!!!' })
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

export default { create, getAll, getById, deleteOne, updateOne }
