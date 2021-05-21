const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: String,
    senha: String
})

const users = mongoose.model('Usuarios', DataSchema)
module.exports = users;