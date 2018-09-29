const User = require('./user')
const Succulent = require('./succulent')
const Order = require('./order')
const Review = require('./review')
const LineItem = require('./line-item')
const Category = require('./category')

Order.belongsToMany(Succulent, { through: 'LineItem' })
Succulent.belongsToMany(Order, { through: 'LineItem' })

Review.belongsTo(Succulent)
Succulent.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Succulent.belongsTo(Category)
Category.hasMany(Succulent)

module.exports = {
  User,
  Succulent,
  Order,
  Review,
  LineItem,
  Category
}
