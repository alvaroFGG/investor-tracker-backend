const investorService = require('../services/investorsService')

const getAllInvestors = async (req, res) => {
  const allInvestors = await investorService.getAllInvestors()

  res.status(200).json(allInvestors)
}

module.exports = {
  getAllInvestors
}
