import React, { Component } from 'react';
import { connect } from 'react-redux'
import { clearCartCount } from '../store/cartCount'

class ClearCart extends Component {

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault();
    localStorage.clear();
    this.props.clearCartCount()
  }

  render () {
    return (
      <button onClick={this.handleClick} type="button">Clear Cart</button>
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

export default connect(null, mapDispatch)(ClearCart)
