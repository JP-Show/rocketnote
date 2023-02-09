require('express-async-errors')

const cors = require('cors')
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')
const uploadConfig = require('./config/upload')

const express = require('express')
const routes = require('./router')

const app = express()
app.use(cors())

app.use(express.json())

app.use('/files', express.static(uploadConfig.UPLOAD_FOLDER))

app.use(routes)

migrationsRun()

const URL = '3333'

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return res.status(500).json({
    status: 'error',
    message: 'internal server error'
  })
})

app.listen(URL, () => console.log(`Running on port ${URL}`))
