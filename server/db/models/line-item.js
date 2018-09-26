const Sequelize = require('sequelize')
const db = require('../db')

const LineItem= db.define('LineItem', {
    unitPrice: {
      type: Sequelize.INTEGER
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    totalPrice: {
      type: Sequelize.INTEGER
    }
})

module.exports = LineItem
