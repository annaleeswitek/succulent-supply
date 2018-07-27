const Sequelize = require('sequelize')
const db = require('../db')

const Photo = db.define('photo', {
  image: {
    type: Sequelize.STRING,
    defaultValue: 'public/images/terrarium.jpg'
  }
})

module.exports = Photo
