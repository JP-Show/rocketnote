const { Router } = require('express')
const routes = Router()

const usersRoutes = require('./users.routes.js')
const notesRoutes = require('./notes.routes.js')
const tagsRoutes = require('./tags.routes.js')
const sessionRoutes = require('./sessions.routes.js')

routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)
routes.use('/tags', tagsRoutes)
routes.use('/sessions', sessionRoutes)

module.exports = routes
