const InvestorModel = require('../models/investor')

const getAllInvestors = async () => {
  const allInvestors = await InvestorModel.find()

  return allInvestors
}

module.exports = {
  getAllInvestors
}
