const express = require('express')

const TeacherController = require('./controllers/TeacherController')
const TeacherSessionController = require('./controllers/TeacherSessionController')
const TeacherActivityController = require('./controllers/TeacherActivityController')

const routes = express.Router()

routes.post('/teachersSession', TeacherSessionController.create)

routes.post('/teachersActivity', TeacherActivityController.create)
routes.get('/teachersActivity', TeacherActivityController.index)
routes.delete('/teachersActivity/:id', TeacherActivityController.delete)

routes.post('/teachers', TeacherController.create)
routes.get('/teachers', TeacherController.index)


module.exports = routes