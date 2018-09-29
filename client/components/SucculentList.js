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
    const { succulents, selectedSucculents } = this.props
    console.log('succulents', succulents)
    return (
      <div>
        <div className="center">
          <Filter />
        </div>
        <div className="products-wrapper">
          <div className="products-box">
            <div className="products">
              {
                selectedSucculents.length
                  ? selectedSucculents.map(succ => {
                    return <SingleSuccCard succulent={succ} key={succ.id} />
                  })
                  : succulents.map((succ) => {
                    return <SingleSuccCard succulent={succ} key={succ.id} />
                  })
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
    succulents: state.succulents,
    selectedSucculents: state.selectedSucculents
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
