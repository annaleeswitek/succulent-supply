import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    const succulentsInCart = JSON.parse(localStorage.getItem('cart')).succulents;
    let total = 0
    succulentsInCart.map(succ => {
      total = total + (Number(succ.price) * succ.quant)
    })
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
            succulentsInCart.map((succ, idx) => {
              return (
                <div className="cart-item" key={idx}>
                  <div className="cart-image">
                    <Link to={`/succulents/${succ.id}`}>
                      <img src={succ.image} />
                    </Link>
                    <div className="succ-name">
                      <p>{succ.name}</p>
                    </div>
                      <div>Quantity: {succ.quant}</div>
                      <button type="button">X</button>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="cart-title">
          <h1>Total: {total.toFixed(2)}</h1>
          <button type="button">Checkout</button>
          <button type="button">Clear</button>
        </div>
      </div>
    )
}

export default Cart;

