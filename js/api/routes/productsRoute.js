const { Router } = require('express')
const ProductController = require('../controller/ProductController')

const router = Router()

router
  .get('/product', ProductController.getAllProducts)
  .post('/product', ProductController.createProduct)
  .get('/product/:id', ProductController.getProduct)
  .put('/product/:id/update', ProductController.updateProduct)
  .delete('/product/:id/delete', ProductController.deleteProduct)

module.exports = router
