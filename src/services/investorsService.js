const InvestorModel = require('../models/investor')

const getAllInvestors = async () => {
  const allInvestors = await InvestorModel.find()

  return allInvestors
}

const getPaginatedInvestors = async (page) => {
  const paginatedInvestors = await InvestorModel.find().skip((page - 1) * 10).limit(10)

  return paginatedInvestors
}

module.exports = {
  getAllInvestors,
  getPaginatedInvestors
}
