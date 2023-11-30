const investorService = require('../services/investorsService')

const getInvestors = async (req, res) => {
  const { page } = req.query

  if (page) {
    const paginatedInvestors = await investorService.getPaginatedInvestors(page)

    if (!paginatedInvestors || paginatedInvestors.length === 0) return res.status(404).json({ message: 'No investors found' })

    return res.status(200).json(paginatedInvestors)
  } else {
    const allInvestors = await investorService.getAllInvestors()

    if (!allInvestors || allInvestors.length === 0) return res.status(404).json({ message: 'No investors found' })

    return res.status(200).json(allInvestors)
  }
}

module.exports = {
  getInvestors
}
