const express = require('express')

const TeacherController = require('./controllers/TeacherController')

const routes = express.Router()

routes.post('/teachers', TeacherController.create)
routes.get('/teachers', TeacherController.index)

module.exports = routes