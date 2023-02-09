const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const authConfig = require('../config/auth')
const { sign } = require('jsonwebtoken')

const { compare } = require('bcryptjs')

class SessionsControllers {
  async create(req, res) {
    const { email, password } = req.body

    const user = await knex('users').where({ email }).first()

    if (!user) {
      throw new AppError('email and/or password incorrect', 401)
    }

    const passwordMatched = await compare(password, user.password)
    console.log(password)
    console.log(user.password)
    console.log(passwordMatched)

    if (!passwordMatched) {
      throw new AppError('email and/or password incorrect', 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return res.json({ user, token })
  }
}

module.exports = SessionsControllers
