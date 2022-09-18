const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

router
  .get('/users', UserController.getAllUsers)
  .post('/user/create', UserController.createUser)
  .post('/user/:id', UserController.getUser)
  .put('/user/:id/update', UserController.updateUser)
  .delete('/user/:id/delete', UserController.deleteUser)

module.exports = router
