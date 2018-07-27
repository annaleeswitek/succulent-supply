const Sequelize = require('sequelize')
const db = require('../db')

const Supply = db.define('supply', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        min: 0.01
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }
})

module.exports = Supply
