import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneSucculent } from '../store/singleSucculent'

class SingleSucculent extends Component {

  constructor() {
    super()
    this.state = {
      toggle: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchOneSucculent(this.props.match.params.id)
    console.log('this.props.match.params.id', this.props.match.params.id)
  }

  handleClick() {

    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  render(){
    console.log('this.props: ', this.props)
    const { singleSucculent } = this.props
    return (
      <div >
        <div>
        {
          singleSucculent.id
          ? <div className="single-product-wrapper">
              <div className="big-product-image">
                <img src={singleSucculent.image} />
              </div>
              <div>
                <div className="description-box">
                  <span className="karla-font product-title"><b>{singleSucculent.name}</b></span>
                  <br />
                  <span className="karla-font product-price">Price: ${singleSucculent.price}</span>
                  <br />
                  <span>Stars Go Here</span>
                  <br />
                  <span>Choose amount field goes here</span>
                  <br />
                  <button type="button">Add to Cart</button>
                  <hr />
                  <div className="info-options-box">
                    <span onClick={this.handleClick}><b>Description</b></span>

                    <span onClick={this.handleClick}><b>Details</b></span>
                  </div>
                  {
                    this.state.toggle ?
                      (
                        <div>
                          <span>{singleSucculent.description}</span>
                        </div>
                      )
                    :
                      (
                        <div>
                          <span>Family: {singleSucculent.family}</span>
                          <br />
                          <span>Genus: {singleSucculent.genus}</span>
                          <br />
                          <span>Species: {singleSucculent.species}</span>
                        </div>
                      )
                  }
              </div>
             </div>
            </div>
          : <p>🚫🌵 Sorry! No succulent to see here! 🚫🌵</p>
        }
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  singleSucculent: state.singleSucculent
})

const mapDispatch = dispatch => ({
  fetchOneSucculent(id) {
    dispatch(fetchOneSucculent(id))
  }
})

export default connect(mapState, mapDispatch)(SingleSucculent)
