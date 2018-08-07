const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  emoji: {
    type: Sequelize.STRING,
    defaultValue: '🌵'
  }
})

module.exports = Category
