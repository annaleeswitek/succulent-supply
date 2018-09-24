import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCartCount } from '../store/cartCount'

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
          succulents: []
        })
      )
    }

    const cart = JSON.parse(localStorage.getItem('cart'))

    let updatedSucculents = cart.succulents,
      succulentToAdd = this.props.succulent

    updatedSucculents.push(succulentToAdd)

    updatedSucculents.forEach(succ => {
      if (succulentToAdd.name === succ.name) {
        succ.quant++
      }
    })

    succulentToAdd.quant = 1;

    const seen = {};
    updatedSucculents = updatedSucculents.filter(function(item) {
      return seen.hasOwnProperty(item.name) ? false : (seen[item.name] = true);
    });

    localStorage.removeItem('cart')
    localStorage.setItem(
      'cart',
      JSON.stringify({
        succulents: updatedSucculents
      })
    )

    this.props.incrementCartCount()
  }

  render () {
    return (
      <button type="button" onClick={this.handleClick}>Add to Cart</button>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    incrementCartCount() {
      dispatch(incrementCartCount())
    }
  }
}

export default connect(null, mapDispatch)(AddToCartButton)

