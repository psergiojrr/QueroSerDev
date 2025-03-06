const User = require('../models/users.js')

class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

class UserController {
  static async createUser(req, res, next) {
    const { name, email, password } = req.body

    if(!name) {
      throw new AppError('O campo nome é obrigatório!', 400)
    }

    if(!email) {
      throw new AppError('O campo email obrigatório!', 400)
    }

    if(!password) {
      throw new AppError('O campo senha obrigatório!', 400)
    }

    try {
      const hasUserWithThisEmail = await User.findOne({
        where: { email: String(email) }
      })

      if (hasUserWithThisEmail) {
        throw new AppError('O e-mail informado já está em uso.', 409)
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
      return next(error)
    }
  }

  //todo: Colocar trava que apenas admin pode acessar esse endpoint
  static async getAllUsers(req, res, next) {
    try {
      const allUsers = await User.findAll()
      return res.status(201).json(allUsers)
    } catch (error) {
      return next(error)
    }
  }

  static async updateUser(req, res, next) {
    const { id } = req.params
    const { name, email, password } = req.body

    if(!name) {
      throw new AppError('O campo nome é obrigatório!', 400)
    }

    if(!email) {
      throw new AppError('O campo email é obrigatório!', 400)
    }

    if(!password) {
      throw new AppError('O campo password é obrigatório!', 400)
    }

    const user = await User.findByPk(id)

    if(!user) {
      throw new AppError('O usuário não existe!', 400)
    }

    try {
      user.name = name
      user.email = email
      user.password = password

      const [updatedRows] = await User.update(
        { name, email, password },
        { where: { id } }
      )
  
      if (updatedRows === 0) {
        throw new AppError('Erro ao atualizar o usuário!', 400)
      }

      return res.status(201).json({
        message: 'Usuário alterado com sucesso',
        status: 'sucesso',
      })
    } catch (error) {
      return next(error)
    }
  }

  static async deleteUser(req, res, next) {
    const { id } = req.params
    try {
      await User.destroy({ where: { id: Number(id) } })
      return res.status(201).json({ message: 'Usuário deletado' })
    } catch (error) {
      return next(error)
    }
  }

  //todo terminar a lógica de login e a tratativa de erros
  static async login(req, res, next) {
    const { email, password } = req.body

    if(!email) {
      throw new AppError('O campo email é obrigatório!')
    }

    if(!password) {
      throw new AppError('O campo senha é obrigatório!')
    }

    try {
      const checkUser = await User.findOne({
        where: {
          email,
          password
        }
      })

      if(!checkUser) {
        throw new AppError('Email ou senha inválido!')
      }

    } catch (error) {
      return next(error)
    }
  }  
}

module.exports = UserController
