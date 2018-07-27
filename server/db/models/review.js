const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    validate: {
        len: [0, 250]
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
        min: 0,
        max: 5
    }
  },
  comment: {
    type: Sequelize.TEXT,
    validate: {
        len: [10, 500]
    }
  }
})

// if they don't enter a title, create a hook to make a default title

module.exports = Review;
