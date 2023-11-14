const mongoose = require('mongoose')

const investorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  sectors: {
    type: [String],
    required: true
  },
  businessModel: {
    type: [String],
    required: true
  },
  country: {
    type: String,
    required: true
  },
  countriesInvests: {
    type: [String],
    required: true
  },
  maxTicket: {
    type: Number,
    required: true
  },
  minTicket: {
    type: Number,
    required: true
  },
  members: {
    type: [{
      name: String,
      lastName: String,
      linkedIn: String,
      email: String,
      role: String
    }],
    required: true
  },
  website: {
    type: String,
    required: true
  }
})

const InvestorModel = mongoose.model('Investor', investorSchema)

module.exports = InvestorModel
