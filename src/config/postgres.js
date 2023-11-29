require('dotenv').config()
const Sequelize = require('sequelize')

const PORT = process.env.PG_PORT || 5342
const DB_NAME = process.env.PG_DATABASE
const DB_USER = process.env.PG_USERNAME
const DIALECT = process.env.PG_DIALECT
const HOST = process.env.PG_HOST

const sequelize = new Sequelize(DB_NAME, DB_USER, '', {
  host: HOST,
  port: PORT,
  dialect: DIALECT,
  logging: false
})

module.exports = sequelize
