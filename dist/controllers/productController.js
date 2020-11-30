'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _productModel = require('../models/productModel');

var _productModel2 = _interopRequireDefault(_productModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function create(req, res) {
  try {
    console.log('Entrou');

    const { filename: image } = req.file;

    const [name] = image.split('.');
    const filename = `${name}.jpg`;

    console.log(filename);

    await _productModel2.default.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: filename
    });

    return res.status(201).send({ message: 'Product Registered with success!' });
  } catch (error) {
    return res.status(201).send({ message: 'ERRO, tudo cagado', error });
  }
}

async function getAll(req, res) {
  try {
    const data = await _productModel2.default.find();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function getById(req, res) {
  try {
    const data = await _productModel2.default.findByIdAndUpdate(req.params.id);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function updateOne(req, res) {
  try {
    await _productModel2.default.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
      }
    });

    return res.status(201).send({ message: 'Product Registered with success!' });
  } catch (error) {
    return res.satus(400).send({ Menssagem: 'Tudo cagado!', error });
  }
}

async function deleteOne(req, res) {
  try {
    const { id } = req.params;

    console.log('entrou');
    await _productModel2.default.findByIdAndDelete(id);

    return res.status(201).send({ message: 'Product Deleted with success!' });
  } catch (error) {
    return res.satus(400).send({ Mensagem: 'All cagado!!', error });
  }
}

exports.default = { getAll, create, deleteOne, updateOne, getById };