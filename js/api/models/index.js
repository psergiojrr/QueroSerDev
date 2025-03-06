const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  username: 'postgres',
  password: 'postgres', 
  database: 'postgres',
  host: 'db',
  port: 5432,
  dialect: 'postgres', 
});

module.exports = sequelize;
