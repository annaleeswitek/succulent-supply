import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearCartCount } from '../store/cartCount'
import { updateCartCount } from '../store/cartCount'

class Cart extends Component {

    constructor () {
      super()
      this.state = {
        succulentsInCart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).succulents : null
      }
      this.handleClearClick = this.handleClearClick.bind(this)
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleClearClick (event) {
      event.preventDefault()
      localStorage.clear()
      this.props.clearCartCount()
      this.forceUpdate()
    }

    handleDeleteClick (event) {
      event.preventDefault()
      event.persist()
      console.log(event.target.value)

      const succulent = this.state.succulentsInCart.find(succ => succ.name === event.target.value)

      this.setState((prevState) => ({
        succulentsInCart: prevState.succulentsInCart.filter(succ => succ.name !== event.target.value)
      }))
      this.props.updateCartCount(succulent.quant)

      localStorage.setItem(
        'cart',
        JSON.stringify({
          succulents: this.state.succulentsInCart.filter(succ => succ.name !== event.target.value)
        })
      )
    }

    render () {
      let total = 0

      if (localStorage.getItem('cart')){
        this.state.succulentsInCart.map(succ => {
          total = total + (Number(succ.price) * succ.quant)
        })
      }
      return (
        <div>
          <div className="cart-title">
          <hr />
            <h1>Shopping Cart</h1>
          </div>
          <hr />
          <div className="cart-wrapper">
            <div className="cart-box">
            {
              this.state.succulentsInCart && this.state.succulentsInCart.length
              ?
              <div>
                {
                  this.state.succulentsInCart.map((succ, idx) => {
                    return (
                      <div key={idx}>
                        <hr />
                        <div className="cart-item">
                          <div className="cart-item-content">
                            <Link to={`/succulents/${succ.id}`}>
                              <img src={succ.image} />
                            </Link>
                            <p>{succ.name}</p>
                            <div>Quantity: {succ.quant}</div>
                            <div>Price: {(Number(succ.price) * succ.quant).toFixed(2)}</div>
                            <button onClick={this.handleDeleteClick} value={succ.name} type="button">X</button>
                          </div>
                        </div>
                        <hr />
                      </div>
                    )
                  })
                }
                <div className="cart-title">
                  <h1>Total: {total.toFixed(2)}</h1>
                  <button type="button">Checkout</button>
                  <button onClick={this.handleClearClick} type="button">Clear Cart</button>
                </div>
              </div>
              :
              <div><h2>🚫🌵 Sorry! No succulents to see here! 🚫🌵</h2></div>
            }
            </div>
          </div>
        </div>
      )
    }
}

const mapDispatch = dispatch => {
  return {
    clearCartCount() {
      dispatch(clearCartCount())
    },
    updateCartCount(newCount) {
      dispatch(updateCartCount(newCount))
    }
  }
}

export default connect(null, mapDispatch)(Cart)

