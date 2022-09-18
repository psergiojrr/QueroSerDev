const bodyParser = require('body-parser')
const users = require('./usersRoute')
const products = require('./productsRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(users)
  app.use(products)
}
