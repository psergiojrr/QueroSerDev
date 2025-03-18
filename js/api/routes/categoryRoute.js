const { Router } = require('express')
const CategoryController = require('../controller/CategoryController')

const router = Router()

router
  .get('/category', CategoryController.getAllCategories)
  .post('/category', CategoryController.createCategory)
  .get('/category/:id', CategoryController.getCategory)
  .put('/category/:id/update', CategoryController.updateCategory)
  .delete('/category/:id/delete', CategoryController.deleteCategory)

module.exports = router
