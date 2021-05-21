const express = require('express');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.get('/', function(req,res){
    res.json({message: "Bem vindo ao Back End Mongo DB"})
})

routes.get('/usuario', UserController.index)
routes.get('/usuario/:_id', UserController.detail)
routes.post('/usuario', UserController.store)
routes.delete('/usuario/:_id', UserController.delete)
routes.put('/usuario', UserController.update)

module.exports = routes;