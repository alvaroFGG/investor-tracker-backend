const Investor = require('../models/postgres/investor')
const InvestorModel = require('../models/mongo/investor')

const getAllInvestors = async () => {
  const allInvestors = await InvestorModel.find()

  for (const investor of allInvestors) {
    if (!investor.uid) continue

    await Investor.create({
      _id: investor._id.toHexString(),
      name: investor.name,
      type: investor.type,
      sectors: investor.sectors,
      businessModel: investor.businessModel,
      businessTarget: investor.businessTarget,
      country: investor.country,
      countriesInvests: investor.countriesInvests,
      maxTicket: investor.maxTicket,
      minTicket: investor.minTicket,
      members: investor.members,
      website: investor.website,
      roundPhases: investor.roundPhases,
      createdAt: investor.createdAt
    })

    console.log(`Investor ${investor.name} created`)
  }

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
