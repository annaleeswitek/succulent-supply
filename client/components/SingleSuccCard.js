import React from 'react'
import { Link } from 'react-router-dom'

const SingleSuccCard = (props) => {
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
      <button type="button">Add to Cart</button>
		</div>
	)
}

export default SingleSuccCard
