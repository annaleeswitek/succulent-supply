import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import ClearCart from './ClearCart'
import { clearCartCount } from '../store/cartCount'

class Cart extends Component {

    constructor () {
      super()
      this.state = {
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
      event.preventDefault();
      localStorage.clear();
      this.props.clearCartCount()
      this.forceUpdate();
    }

    render () {
      let succulentsInCart = []
      let total = 0

      if (localStorage.getItem('cart')){
         succulentsInCart = JSON.parse(localStorage.getItem('cart')).succulents;

        succulentsInCart.map(succ => {
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
              succulentsInCart.length
              ?
              <div>
                {
                  succulentsInCart.map((succ, idx) => {
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
                            <div>Price: {Number(succ.price) * succ.quant}</div>
                            <button type="button">X</button>
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
                  <button onClick={this.handleClick} type="button">Clear Cart</button>
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
    }
  }
}

export default connect(null, mapDispatch)(Cart)

