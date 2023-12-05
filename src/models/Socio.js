const { Schema, model } = require('mongoose');

const socioSchema = new Schema({
    codigo: {
        type: String,
        unique: true 
     },
    nombre: String,
    direccion: String,
    telefono: String,
});

module.exports = model('Socio', socioSchema);