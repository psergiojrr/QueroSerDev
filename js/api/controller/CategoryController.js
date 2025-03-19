const { Op } = require('sequelize')
const Category = require('../models/categories')

class CategoryController {
  static async createCategory(req, res) {
    const newCategory = req.body
    try {
      const checkCategory = await Category.findOne({
        where: { name: String(newCategory.name) }
      })

      if (checkCategory !== null) {
        return res.status(200).json({
          message: 'Já existe uma categoria cadastrada com esse nome!',
          status: 'erro'
        })
      } else {
        const newCategoryCreated = await Category.create({
          name: newCategory.name,
        })
        return res.status(200).json({
          message: 'Categoria cadastrada com sucesso',
          status: 'sucesso',
          data: newCategoryCreated
        })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAllCategories(req, res) {
    try {
      const { name, category } = req.query

      if (name || category) {
        const allProducts = await Category.findAll({
          where: {
            [Op.or]: [
              { name: { [Op.ilike]: `%${name}%` } },
              { category: { [Op.ilike]: `%${category}%` } }
            ]
          }
        })
        return res.status(200).json(allProducts)
      } else {
        const allProducts = await Category.findAll()
        return res.status(200).json(allProducts)
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getCategory(req, res) {
    const { id } = req.params

    try {
      const getCategory = await Category.findOne({
        where: {
          id: id
        }
      })
      return res.status(200).json(getCategory)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //todo implement logic to frontend
  static async updateCategory(req, res) {
    const { id } = req.params
    const newInfo = req.body

    try {
      await Category.update(newInfo, { where: { id: Number(id) } })
      const updatedCategory = await Category.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(updatedCategory)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //todo implement logic to frontend
  static async deleteCategory(req, res) {
    const { id } = req.params
    try {
      await Category.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Categoria deletada' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CategoryController
