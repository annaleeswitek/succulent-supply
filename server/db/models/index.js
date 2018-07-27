const User = require('./user')
const Succulent = require('./succulent')
const Image = require('./image')
const Order = require('./order')
const Review = require('./review')

Order.belongsToMany(Succulent, { through: 'Succulent_Orders' })
Succulent.belongsToMany(Order, { through: 'Succulent_Orders' })

Image.belongsTo(Succulent)
Succulent.hasMany(Image)

Review.belongsTo(Succulent)
Succulent.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

module.exports = {
  User,
  Succulent,
  Image,
  Order,
  Review
}
