const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (checkUserExists) {
      throw new AppError('this email already be used')
    }

    const hashPassword = await hash(password, 8)

    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashPassword]
    )

    return res.status(201).json()
  }

  async update(req, res) {
    const { name, email, password, old_password } = req.body
    const user_id = req.user.id

    const database = await sqliteConnection()

    const user = await database.get('SELECT * FROM users WHERE id = (?)', [
      user_id
    ])

    if (!user) {
      throw new AppError('User is not exists')
    }

    const userWithUpdateEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError('Email already be used')
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError('You need to inform the current password')
    }

    if (password && old_password) {
      const comparePassword = await compare(old_password, user.password)

      if (!comparePassword) {
        throw new AppError('you miss the current password')
      }

      user.password = await hash(password, 8)
    }

    await database.run(
      `
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?
    `,
      [user.name, user.email, user.password, user_id]
    )
    return res.status(200).json()
  }
}
module.exports = UsersController
