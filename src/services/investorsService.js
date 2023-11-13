const Investor = require('../database/Investor')

const getAllInvestors = async () => {
  const allInvestors = Investor.getAllInvestors()

  return allInvestors
}

module.exports = {
  getAllInvestors
}
