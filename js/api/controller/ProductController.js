const { Op } = require('sequelize')
const Products = require('../models/products')

class ProductController {
  static async createProduct(req, res) {
    const newProduct = req.body
    try {
      const checkProduct = await Products.findOne({
        where: { name: String(newProduct.name) }
      })

      if (checkProduct !== null) {
        return res.status(200).json({
          message: 'Já existe um produto cadastrado com esse nome!',
          status: 'erro'
        })
      } else {
        const newProductCreated = await Products.create({
          name: newProduct.name,
          description: newProduct.description,
          category: newProduct.category,
          price: newProduct.price,
          image: newProduct.image
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
      const { name, category } = req.query

      if (name || category) {
        const allProducts = await Products.findAll({
          where: {
            [Op.or]: [
              { name: { [Op.ilike]: `%${name}%` } },
              { category: { [Op.ilike]: `%${category}%` } }
            ]
          }
        })
        return res.status(200).json(allProducts)
      } else {
        const allProducts = await Products.findAll()
        return res.status(200).json(allProducts)
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params

    try {
      const getProduct = await Products.findOne({
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
      await Products.update(newInfo, { where: { id: Number(id) } })
      const updatedProduct = await Products.findOne({
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
      await Products.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Produto deletado' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ProductController
