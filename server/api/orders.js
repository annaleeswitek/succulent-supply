const router = require('express').Router()
const { Order, LineItem } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({})
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const succulents = req.body;
    let sum = 0
    succulents.forEach(succ => {
      sum += succ.quant * succ.price
    })

    const newOrder = await Order.create({
      totalPrice: sum,
      status: 'paid'
    })
    succulents.forEach(async (succ) => {
      const newLineItem = await LineItem.create({
        orderId: newOrder.id,
        succulentId: succ.id,
        unitPrice: succ.price,
        quantity: succ.quant,
        totalPrice: succ.price * succ.quant
      })
      res.send(newLineItem).status(201)
    })
  } catch (err) {
    next(err)
  }
})

