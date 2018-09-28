import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="center">
      <h1 className="karla-font">
        Thank you for your order!
      </h1>
      <Link to="/home">
      <button type="button">Keep Shopping</button>
      </Link>
    </div>
  )
}

export default ThankYou
