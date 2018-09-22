const User = require('./user')
const Succulent = require('./succulent')
const Order = require('./order')
const Review = require('./review')
const OrderSucculents = require('./succulent-orders')

Order.belongsToMany(Succulent, { through: 'OrderSucculents' })
Succulent.belongsToMany(Order, { through: 'OrderSucculents' })

Review.belongsTo(Succulent)
Succulent.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

module.exports = {
  User,
  Succulent,
  Order,
  Review,
  OrderSucculents
}
