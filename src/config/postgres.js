require('dotenv').config()
const Sequelize = require('sequelize')

const PORT = process.env.PG_PORT || 5342
const DB_NAME = process.env.PG_DATABASE
const DB_USER = process.env.PG_USERNAME
const HOST = process.env.PG_HOST

const sequelize = new Sequelize(DB_NAME, DB_USER, '', {
  host: HOST,
  port: PORT,
  dialect: 'postgres',
  logging: false
})

try {
  sequelize.authenticate()
  sequelize.sync()
  console.log('Connected to Postgres')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

module.exports = sequelize
