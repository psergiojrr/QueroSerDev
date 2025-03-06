const Sequelize = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define('user', {
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  permission: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'USER'
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

module.exports = User