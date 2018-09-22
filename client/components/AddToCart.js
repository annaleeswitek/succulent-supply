import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCartCount } from '../store/cartCount'

class AddToCartButton extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart',
        JSON.stringify({
          succulents: [],
          orderTotal: 0
        })
      )
    }

    const cart = JSON.parse(localStorage.getItem('cart'))

    let updatedSucculents = cart.succulents,
      succulentToAdd = this.props.succulent,
      total = 0

    updatedSucculents.push(succulentToAdd)

    updatedSucculents.map(succ => {
      total = total + Number(succ.price)
    })

    localStorage.removeItem('cart')
    localStorage.setItem(
      'cart',
      JSON.stringify({
        succulents: updatedSucculents,
        orderTotal: total.toFixed(2)
      })
    )

    this.props.updateCartCount((JSON.parse(localStorage.getItem('cart')).orderTotal))
  }

  render () {
    return (
      <button type="button" onClick={this.handleClick}>Add to Cart</button>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    updateCartCount() {
      dispatch(updateCartCount())
    }
  }
}

export default connect(null, mapDispatch)(AddToCartButton)

