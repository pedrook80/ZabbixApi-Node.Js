const express = require('express')
const routes = express.Router()

const EventosController = require('./controllers/EventosController')

routes.get('/get',EventosController.index)

module.exports = routes