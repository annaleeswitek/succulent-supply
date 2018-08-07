const User = require('./user')
const Succulent = require('./succulent')
const Order = require('./order')
const Review = require('./review')
const Category = require('./category')
const SubCategory = require('./subcategory')

Order.belongsToMany(Succulent, { through: 'Succulent_Orders' })
Succulent.belongsToMany(Order, { through: 'Succulent_Orders' })

Review.belongsTo(Succulent)
Succulent.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

SubCategory.belongsTo(Category)
Category.hasMany(SubCategory)

Succulent.belongsTo(SubCategory)
SubCategory.hasMany(Succulent)

module.exports = {
  User,
  Succulent,
  Order,
  Review,
  Category,
  SubCategory
}
