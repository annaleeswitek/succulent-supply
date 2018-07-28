const router = require('express').Router()
const { Succulent } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const succulents = await Succulent.findAll()
    res.json(succulents)
  } catch (err) {
     next(err)
  }
})
