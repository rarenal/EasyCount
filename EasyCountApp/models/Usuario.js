var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);