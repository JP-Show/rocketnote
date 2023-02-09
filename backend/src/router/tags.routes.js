const { Router } = require('express')
const TagsController = require('../controller/TagsControllers')

const tagsRoutes = Router()

const tagsController = new TagsController()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

tagsRoutes.use(ensureAuthenticated)

tagsRoutes.get('/', tagsController.index)

module.exports = tagsRoutes
