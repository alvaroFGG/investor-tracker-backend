require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.DB_URI

mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected to MongoDB.')
}).catch(err => {
  console.log('Failed to connect to MongoDB.')
  console.log(err)
})
