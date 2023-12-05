const { Schema, model } = require('mongoose');
const Pelicula = require(`./Pelicula`)
const mongoose = require("mongoose");


const cintaSchema = new Schema({
    numero: {
       type: String,
       unique: true 
    },
    pelicula: {type: mongoose.Types.ObjectId, ref:"Pelicula"},
    disponible: Boolean
});

module.exports = model('Cinta', cintaSchema);