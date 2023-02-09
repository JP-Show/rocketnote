const { Router } = require('express')

const SessionsControllers = require('../controller/SessionsControllers')

const sessionsControllers = new SessionsControllers()

const sessionRoutes = Router()

sessionRoutes.post('/', sessionsControllers.create)

module.exports = sessionRoutes
