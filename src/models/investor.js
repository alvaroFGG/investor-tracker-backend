const { DataTypes } = require('sequelize')
const sequelize = require('../config/postgres')

const Investor = sequelize.define('investors', {
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sectors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  businessModel: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  businessTarget: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countriesInvests: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  maxTicket: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  minTicket: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  members: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  roundPhases: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = Investor
