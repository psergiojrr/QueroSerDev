const User = require('../models/users.js')

class UserController {
  static async createUser(req, res) {
    const { name, email, password } = req.body

    if(!name) {
      return res.status(400).send('O campo nome é obrigatório!')
    }

    if(!email) {
      return res.status(400).send('O campo email é obrigatório!')
    }

    if(!password) {
      return res.status(400).send('O campo senha é obrigatório!')
    }

    try {
      const hasUserWithThisEmail = await User.findOne({
        where: { email: String(email) }
      })

      if (hasUserWithThisEmail) {
        return res.status(400).send('O e-mail informado já está em uso.')
      } else {
        const newUser = await User.create({
          name,
          email,
          password
        })
        return res.status(201).json({
          message: 'Usuário criado com sucesso.',
          status: 'sucesso',
          data: newUser
        })
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  //todo implement logic to frontend
  //todo only admins will be allowed so access
  static async getAllUsers(req, res) {
    try {
      const allUsers = await User.findAll()
      return res.status(200).json(allUsers)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params
    const { name, password } = req.body

    if(!name) {
      return res.status(400).send('O campo name é obrigatório!')
    }

    if(!password) {
      return res.status(400).send('O campo senha é obrigatório!')
    }

    const user = await User.findByPk(id)

    if(!user) {
      return res.status(400).send('O usuário não existe!')
    }

    try {
      user.name = name
      user.password = password

      const [updatedRows] = await User.update(
        { name, password },
        { where: { id } }
      )
  
      if (updatedRows === 0) {
        return res.status(400).send('OErro ao atualizar o usuário!')
      }

      return res.status(204).json({
        message: 'Usuário alterado com sucesso',
        status: 'sucesso',
      })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  //todo implement logic to frontend
  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await User.destroy({ where: { id: Number(id) } })
      return res.status(204).json({ message: 'Usuário deletado' })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  static async login(req, res) {
    const { email, password } = req.body

    if(!email) {
      return res.status(400).send('O campo email é obrigatório!')
    }

    if(!password) {
      return res.status(400).send('O campo senha é obrigatório!')
    }

    try {
      const user = await User.findOne({
        where: {
          email,
          password
        }
      })

      if(!user) {
        return res.status(400).send('Email ou senha inválidos!')
      }

      return res.status(200).send(user)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }  
}

module.exports = UserController
