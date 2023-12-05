const { Schema, model } = require('mongoose');

const actorSchema = new Schema({
    name: String
});

module.exports = model('Actor', actorSchema);