const Genero = require(`./Genero`)
const Actor = require(`./Actor`)
const Director = require(`./Director`)

const { Schema, model } = require('mongoose');
const mongoose = require("mongoose")

const peliculaSchema = new Schema({
    name: String,
    genero: {type: mongoose.Types.ObjectId, ref:"Genero"},
    actor: {type: mongoose.Types.ObjectId, ref: "Actor"},
    director: {type: mongoose.Types.ObjectId, ref: "Director"},
});

module.exports = model('Pelicula', peliculaSchema);