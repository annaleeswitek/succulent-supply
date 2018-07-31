import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reviews extends Component {

  calculateStars(numStars){
    let starArray = []
    let wholeStars = Math.floor(numStars)
    for (let i = 0; i < wholeStars; i++) {
      starArray.push('⭐️')
    }
    if (numStars > wholeStars){
      starArray.push('½')
    }
    return starArray.join('')
  }

  render () {
    const { selectedReviews } = this.props
    return (
      <div className ="reviews-box">
        <div className="reviews-wrapper">
          <h2 className="karla-font reviews-title">Reviews</h2>
          <button type="button">Write a Review</button>
        </div>
        <hr />
        {
          selectedReviews && selectedReviews.map(review => {
            return (
              <div key={review.id}>
                <h2>{review.title}</h2>
                <div>{this.calculateStars(review.rating)}</div>
                <h2>{review.author}</h2>
                <p>{review.body}</p>
                <hr />
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => ({
  selectedReviews: state.singleSucculent.reviews
})

export default connect(mapState, null)(Reviews)

