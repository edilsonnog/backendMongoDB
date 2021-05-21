const Usuario = require('../model/usuarios');

module.exports = {
    async index (req, res) {
        const usuarios = await Usuario.find(); // select * from users
        res.json(usuarios) 
    },

    async detail (req, res) {
        const { _id } = req.params
        const usuarios = await Usuario.findOne({_id}); // select * from users where id = 
        res.json(usuarios) 
    },

    async store (req, res) {
        const { nome, senha } = req.body;

        let dataCreate = {}

        dataCreate = {
            nome, senha
        }

        const usuarios = await Usuario.create(dataCreate); // select * from users
        res.json(usuarios) 
    },

    async delete (req, res) {
        const { _id } = req.params
        const usuarios = await Usuario.findByIdAndDelete({_id}); // delete  users where id = 
        res.json(usuarios) 
    },

    async update (req, res) {
        const { _id, nome, senha } = req.body;

        let dataCreate = {}

        dataCreate = {
            nome, senha
        }

        const usuarios = await Usuario.findByIdAndUpdate({_id}, dataCreate, {new: true}); // update * from users
        res.json(usuarios) 
    }
}