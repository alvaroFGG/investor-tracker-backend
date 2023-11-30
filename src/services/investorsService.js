const Investor = require('../models/investor')

const getAllInvestors = async () => {
  const allInvestors = await Investor.findAll()

  return allInvestors
}

const getPaginatedInvestors = async (page) => {
  const allInvestors = await Investor.findAll({
    offset: (page - 1) * 10,
    limit: 10
  })

  return allInvestors
}

module.exports = {
  getAllInvestors,
  getPaginatedInvestors
}
