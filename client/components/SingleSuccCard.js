import React from 'react'
import { Link } from 'react-router-dom'

const SingleSuccCard = (props) => {
	const { succulent } = props

	return (
		<div className="product">
			<div className="product-image">
				<img src={succulent.image} />
			</div>
			<div>
				<a>{succulent.name}</a> <br />
				<a>Price: ${succulent.price}</a>
			</div>
			<div>
				<button><Link to={`/succulents/${succulent.id}`}>More Info</Link></button>
			</div>
		</div>
	)
}

export default SingleSuccCard
