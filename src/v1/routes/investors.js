const express = require('express')
const router = express.Router()
const investorController = require('../../controllers/investorController')

router
  .get('/investors', investorController.getInvestors)

module.exports = router
