const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    totalPrice: {
        type: Sequelize.FLOAT,
        defaultValue: 0.00
    },
    status: {
        type: Sequelize.ENUM('cart', 'paid'),
        defaultValue: 'cart'
    }
})

module.exports = Order
