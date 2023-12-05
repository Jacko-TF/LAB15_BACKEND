const express = require("express");

const api = express.Router();

const socioController = require('../controllers/socioController')

api.get('/listar', socioController.listar)

api.post('/registrar', socioController.registrar)


module.exports = api;