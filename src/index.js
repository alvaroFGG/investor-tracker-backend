require('./config/postgres')
require('./models/investor')
const express = require('express')
const v1Router = require('./v1/routes/investors')

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
