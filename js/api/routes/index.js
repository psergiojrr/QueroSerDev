const bodyParser = require('body-parser')
const users = require('./usersRoute')
const products = require('./productsRoute')
const categories = require('./categoryRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(users)
  app.use(products)
  app.use(categories)
}
