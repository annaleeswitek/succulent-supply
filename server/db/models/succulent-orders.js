const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('OrderProducts', {
    productPrice: {
        type: Sequelize.INTEGER
    },
    productQuantity: {
        type: Sequelize.INTEGER
    }
})

OrderProducts.prototype.productTotal = () => {
    return this.productPrice * this.productQuantity
};

module.exports = OrderProducts;
