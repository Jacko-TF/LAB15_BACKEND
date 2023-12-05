const { Schema, model } = require('mongoose');

const generoSchema = new Schema({
    name: String
});

module.exports = model('Genero', generoSchema);