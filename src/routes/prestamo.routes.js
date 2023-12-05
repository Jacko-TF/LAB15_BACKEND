const express = require("express");

const api = express.Router();

const prestamoController = require('../controllers/prestamoController')

api.get('/listar', prestamoController.listar)

api.post('/registrar', prestamoController.registrar)

module.exports = api;