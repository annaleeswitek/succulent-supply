const User = require('./user')
const Succulent = require('./succulent')
const Supply = require('./supply')
const Order = require('./order')
const Review = require('./review')

Order.belongsToMany(Succulent, { through: 'Succulent_Orders' })
Succulent.belongsToMany(Order, { through: 'Succulent_Orders' })

Order.belongsToMany(Supply, { through: 'Supply_Orders' })
Supply.belongsToMany(Order, { through: 'Supply_Orders' })

Review.belongsTo(Succulent)
Succulent.hasMany(Review)

Review.belongsTo(Supply)
Supply.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

module.exports = {
  User,
  Succulent,
  Order,
  Review
}
