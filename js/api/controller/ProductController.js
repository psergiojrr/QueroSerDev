const { Op } = require('sequelize')
const database = require('../models')

class ProductController {
  static async createProduct(req, res) {
    const newProduct = req.body
    try {
      const checkProduct = await database.products.findOne({
        where: { nome: String(newProduct.nome) }
      })

      if (checkProduct !== null) {
        return res.status(200).json({
          message: 'Já existe um produto cadastrado com esse nome!',
          status: 'erro'
        })
      } else {
        const newProductCreated = await database.products.create({
          nome: newProduct.nome,
          descricao: newProduct.descricao,
          categoria: newProduct.categoria,
          preco: newProduct.preco,
          imagem: newProduct.imagem
        })
        return res.status(200).json({
          message: 'Produto cadastrado com sucesso',
          status: 'sucesso',
          data: newProductCreated
        })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAllProducts(req, res) {
    try {
      let param = req.body
      let key = Object.keys(param)[0]
      let value = Object.values(param)[0]

      if (param.id != null || param.nome != null || param.categoria != null) {
        const allProducts = await database.products.findAll({
          where: {
            [`${key}`]: {
              [Op.like]: `%${value}%`
            }
          }
        })
        return res.status(200).json(allProducts)
      } else {
        const allProducts = await database.products.findAll()
        return res.status(200).json(allProducts)
      }
    } catch (error) {
      return res.status(200).json(error.message)
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params

    try {
      const getProduct = await database.products.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(getProduct)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params
    const newInfo = req.body

    try {
      await database.products.update(newInfo, { where: { id: Number(id) } })
      const updatedProduct = await database.products.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(updatedProduct)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params
    try {
      await database.products.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Produto deletado' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ProductController
