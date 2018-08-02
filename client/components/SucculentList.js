import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSucculents } from '../store/succulents'
import SingleSuccCard from './SingleSuccCard'
import Filter from './Filter'

class SucculentList extends Component {
  componentDidMount(){
    this.props.fetchSucculents()
  }
  render () {
    const { succulents } = this.props
    return (
      <div>
        <div>
          <Filter />
        </div>
        <div className="products-wrapper">
          <div className="products-box">
            <div className="products">
              {
                succulents.length
                  ? succulents.map(succ => <SingleSuccCard succulent={succ} key={succ.id} />)
                  : <div><h2>🚫🌵 Sorry! No succulents to see here! 🚫🌵</h2></div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    succulents: state.succulents
  }
}

const mapDispatch = dispatch => {
  return {
		fetchSucculents: () => {
			const thunk = fetchSucculents()
			dispatch(thunk)
		}
  }
}

export default connect(mapState, mapDispatch)(SucculentList);

SucculentList.propTypes = {
  succulents: PropTypes.array
}
