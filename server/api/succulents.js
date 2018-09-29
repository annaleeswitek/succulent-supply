const router = require('express').Router()
const { Succulent, Review, Category } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const succulents = await Succulent.findAll({
      include: [ Category ]
    })
    res.json(succulents)
  } catch (err) {
     next(err)
  }
})

router.get('/:succulentId', async (req, res, next) => {
  try {
    const succulent = await Succulent.findById(req.params.succulentId, {
      include: [ Review ]
    })
    res.json(succulent)
  } catch (err) {
    next(err)
  }
})
