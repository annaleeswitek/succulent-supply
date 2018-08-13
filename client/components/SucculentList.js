import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSucculents } from '../store/succulents'
import SingleSuccCard from './SingleSuccCard'
import SideBar from './SideBar'

class SucculentList extends Component {
  componentDidMount(){
    this.props.fetchSucculents()
  }
  render () {
    const { succulents, selectedFilters, selectedSucculents } = this.props
    console.log('succulents:', succulents)
    console.log('selectedFilters:', selectedFilters)
    console.log('selectedSucculents', selectedSucculents)
    return (
      <div>
        <div className="products-wrapper">
          <div className="products-box">
            <SideBar />
            <div className="products">
              {
                selectedSucculents.length
                  ? selectedSucculents.map(succ => {
                    return <SingleSuccCard succulent={succ} key={succ.id} />
                  })
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
    succulents: state.succulents,
    selectedFilters: state.selectedFilters,
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
