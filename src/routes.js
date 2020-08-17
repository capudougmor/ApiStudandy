const express = require('express')

const TeacherController = require('./controllers/TeacherController')
const TeacherSessionController = require('./controllers/TeacherSessionController')

const routes = express.Router()

routes.post('/teachers', TeacherController.create)
routes.get('/teachers', TeacherController.index)

routes.post('/teachersSession', TeacherSessionController.create)

module.exports = routes