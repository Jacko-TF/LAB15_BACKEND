const express = require("express");

const api = express.Router();

const peliculaController = require('../controllers/peliculaController')

api.get('/listar', peliculaController.listar)

api.post('/detalle/:id', peliculaController.detalle)

api.post('/registrar', peliculaController.registrar)

module.exports = api;