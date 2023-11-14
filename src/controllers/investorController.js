const investorService = require('../services/investorsService')

const getAllInvestors = async (req, res) => {
  const { page } = req.query

  if (page) {
    const paginatedInvestors = await investorService.getPaginatedInvestors(page)

    return res.status(200).json(paginatedInvestors)
  } else {
    const allInvestors = await investorService.getAllInvestors()

    return res.status(200).json(allInvestors)
  }
}

module.exports = {
  getAllInvestors
}
