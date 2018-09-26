import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneSucculent } from '../store/singleSucculent'
import Reviews from './Reviews'
import AddToCartButton from './AddToCart'

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
  }

  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  render(){
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
                    <div className="karla-font product-title"><b>{singleSucculent.name}</b></div>
                    <br />
                    <div className="karla-font product-price">Price: ${singleSucculent.price}</div>
                    <br />
                    <div>Stars Go Here</div>
                    <br />
                    <AddToCartButton redirect={true} succulent={singleSucculent}/>
                    <hr />
                    <div>
                      {
                        this.state.toggle
                        ?
                          (
                            <div className="info-options-box">
                              <div className="selected" onClick={this.handleClick}><b>Description</b></div>
                              <div onClick={this.handleClick}><b>Details</b></div>
                            </div>
                          )
                        :
                          (
                            <div className="info-options-box">
                              <div onClick={this.handleClick}><b>Description</b></div>
                              <div className="selected" onClick={this.handleClick}><b>Details</b></div>
                            </div>
                          )
                      }
                    </div>
                      {
                        this.state.toggle
                        ?
                          (
                            <div>
                              <p>{singleSucculent.description}</p>
                            </div>
                          )
                        :
                          (
                            <div>
                              <p><b>Family:</b> {singleSucculent.family}</p>
                              <p><b>Genus: </b>{singleSucculent.genus}</p>
                              <p><b>Species:</b> {singleSucculent.species}</p>
                            </div>
                          )
                      }
                </div>
              </div>
              </div>
            : <p>🚫🌵 Sorry! No succulent to see here! 🚫🌵</p>
          }
        </div>
        <Reviews />
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
