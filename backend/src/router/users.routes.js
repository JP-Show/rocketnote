const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const UsersController = require('../controller/UsersController')
const UserAvatarControllers = require('../controller/UserAvatarControllers')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userAvatarControllers = new UserAvatarControllers()
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarControllers.update
)

module.exports = usersRoutes
