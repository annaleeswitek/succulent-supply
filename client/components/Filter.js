import React, { Component } from 'react'
import { connect } from 'react-redux'

class Filter extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <div className="filter-box">
          <p>Cuteness</p>
          <p>Sun Exposure</p>
          <p>Cactus?</p>
          <p>Price</p>
        </div>
      </div>
    )
  }

}

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Filter)
