const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    totalPrice: {
        type: Sequelize.FLOAT,
        defaultValue: 0.00
    },
    quantityOfItems: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.ENUM('Pending', 'Created', 'Shipped', 'Delivered', 'Return Pending', 'Return Complete'),
        defaultValue: 'Pending'
    }
})

module.exports = Order
