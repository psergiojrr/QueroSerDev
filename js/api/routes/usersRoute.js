const { Router } = require('express')
const UserController = require('../controller/UserController')

const router = Router()

router
  .get('/user', UserController.getAllUsers)
  .post('/user', UserController.createUser)
  .put('/user/:id', UserController.updateUser)
  .delete('/user/:id', UserController.deleteUser)
  .post('/login', UserController.login)

module.exports = router
