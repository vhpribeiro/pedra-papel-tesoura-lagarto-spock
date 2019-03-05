const routes = require('express').Router();
const analisadorDoJogoController = require('../controllers/analisadorDoJogo');

routes.post('/analisarJogo', analisadorDoJogoController.analisarJogo);

module.exports = routes;