const database = require('../models')

class UserController {
  // ********Pega todos os usuários********
  static async getAllUsers(req, res) {
    try {
      const allUsers = await database.users.findAll()
      return res.status(200).json(allUsers)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //********Pega um usuário********
  static async getUser(req, res) {
    const { id } = req.params
    let { email, senha } = req.body

    try {
      if (id != 0) {
        const getUser = await database.users.findOne({
          where: { id: Number(id) }
        })
        return res.status(200).json(getUser)
      } else {
        const checkUser = await database.users.findOne({
          where: { email: String(email) }
        })

        if (checkUser !== null) {
          const getUser = await database.users.findOne({
            where: { email: String(email) },
            where: { senha: String(senha) }
          })
          if (getUser !== null) {
            return res.status(200).json({
              message: 'usuário autenticado',
              data: getUser,
              status: 'sucesso'
            })
          } else {
            return res
              .status(200)
              .json({ message: 'E-mail ou senha inválidos', status: 'erro' })
          }
        } else {
          return res
            .status(200)
            .json({ message: 'E-mail ou senha inválidos', status: 'erro' })
        }
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //********Cria um usuário********
  static async createUser(req, res) {
    const newUser = req.body
    try {
      const checkUser = await database.users.findOne({
        where: { email: String(newUser.email) }
      })

      if (checkUser !== null) {
        return res.status(200).json({
          message: 'Já existe um usuário cadastrado com esse email.',
          status: 'erro'
        })
      } else {
        //const newUserCreated = await database.users.create(newUser)
        const newUserCreated = await database.users.create({
          nome: newUser.nome,
          email: newUser.email,
          senha: newUser.senha,
          admin: 0
        })
        return res.status(200).json({
          message: 'Usuário criado com sucesso.',
          status: 'sucesso',
          data: newUserCreated
        })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //********Atualiza um usuário********
  static async updateUser(req, res) {
    const { id } = req.params
    const newInfo = req.body

    try {
      await database.users.update(newInfo, { where: { id: Number(id) } })
      const updatedUser = await database.users.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //********Deleta um usuário********
  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await database.users.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Usuário deletado' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController
