const Sequelize = require('sequelize')
const db = require('../db')

const OrderSucculents = db.define('OrderSucculents', {
    price: {
        type: Sequelize.INTEGER
    },
    quantity: {
        type: Sequelize.INTEGER
    }
})

OrderSucculents.prototype.productTotal = () => {
    return this.succulentPrice * this.succulentQuantity
};

module.exports = OrderSucculents
