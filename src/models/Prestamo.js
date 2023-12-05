const { Schema, model } = require('mongoose');
const Cinta = require(`./Cinta`)
const Socio = require(`./Socio`)
const mongoose = require("mongoose");


const prestamoSchema = new Schema({
    fecha: Date,
    cinta: {type: mongoose.Types.ObjectId, ref:"Cinta"},
    socio: {type: mongoose.Types.ObjectId, ref:"Socio"},
    devuelta: Boolean
});

module.exports = model('prestamo', prestamoSchema);