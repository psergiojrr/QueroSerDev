const Sequelize = require('sequelize')
const sequelize = require('./index')

const Products = sequelize.define('products', {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Date.now()
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Date.now()
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null
  },
})

module.exports = Products