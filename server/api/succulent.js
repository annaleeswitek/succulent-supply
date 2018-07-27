const router = require('express').Router()
const { Succulent, Image } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const succulents = await Succulent.findAll({
      include: Image
    })
    res.json(succulents)
  } catch (err) {
     next(err)
  }
})
