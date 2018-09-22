import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCartCount } from '../store/cartCount'
import AddToCartButton from './AddToCart'

const SingleSuccCard = (props) =>{

    const { succulent } = props
    return (
      <div className="product">
        <Link to={`/succulents/${succulent.id}`}>
          <div className="product-image">
            <img src={succulent.image} />
          </div>
        </Link>
        <div>
          <span><b>{succulent.name}</b></span> <br />
          <span>Price: ${succulent.price}</span>
        </div>
        <AddToCartButton succulent={succulent} />
      </div>
    )

}

const mapState = state => {
  return {
    cartCount: state.cartCount
  }
}

const mapDispatch = dispatch => {
  return {
    updateCartCount() {
      dispatch(updateCartCount())
    }
  }
}

export default connect(mapState, mapDispatch)(SingleSuccCard)
