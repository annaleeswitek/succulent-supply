import React from 'react'
import { Link } from 'react-router-dom'

const ThankYouReview = (props) => {
  return (
    <div className="center">
      <h1 className="karla-font">
        Thank you for your review!
      </h1>
      <br />
      <br />
      <Link to={`/succulents/${props.match.params.succulentId}`}>
      <button type="button">Return to the succulent you reviewed</button>
      </Link>
    </div>
  )
}

export default ThankYouReview
