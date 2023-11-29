require('./database')
const express = require('express')
const sequelize = require('./config/postgres')
const v1Router = require('./v1/routes/investors')
require('./models/postgres/investor')

try {
  sequelize.authenticate()
  sequelize.sync()
  console.log('Connected to Postgres')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

const app = express()
const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use(express.json())
app.use('/api/v1', v1Router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
