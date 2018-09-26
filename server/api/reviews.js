const router = require('express').Router()
const { Review, Succulent } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({})
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

router.post('/:succulentId', async (req, res, next) => {
  try {
    const reviewedSucculent = await Succulent.findById(req.params.succulentId)
    const newReview = await Review.create(req.body)
    const setTheSucculent = await newReview.setSucculent(reviewedSucculent)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
