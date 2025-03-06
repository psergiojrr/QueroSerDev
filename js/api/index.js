const express = require('express')
const { Sequelize } = require("sequelize")
const routes = require('./routes/index')
const cors = require('cors')

const app = express()
const port = 3000

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'db',
  dialect: 'postgres'
})

app.use(cors())

routes(app)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Erro interno no servidor.'

  return res.status(statusCode).json({
    message,
    status: 'erro'
  })
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)

  sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados estabelecida")
  }).catch(error => {
    console.error('Não foi possível conectar ao banco de dados: ', error.message)
  })
})

module.exports = app
