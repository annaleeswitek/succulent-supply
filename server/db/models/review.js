const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    validate: {
        len: [0, 100]
    }
  },
  rating: {
    type: Sequelize.DECIMAL,
    validate: {
        min: 0,
        max: 5
    }
  },
  body: {
    type: Sequelize.TEXT,
    validate: {
        len: [0, 500]
    }
  },
  author: {
    type: Sequelize.STRING,
    defaultValue: 'anon'
  },
})

// Instance Methods

Review.prototype.findWhenPosted = function () {
  // this is an instance method that returns how long ago the review was posted
}

module.exports = Review;
