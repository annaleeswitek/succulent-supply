import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import { addFilter } from '../store/filter'

class SideBar extends Component {
  constructor () {
    super ()
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck (event) {
    const selectedFilter = event.target.value
    this.props.addFilter(selectedFilter)
  }

  render () {
    return (
      <div className="sidebar-wrapper">
        <Search />

        <br />
        <h3 className="karla-font"><u>Filter Results</u></h3>
        <br />
        <form>
          <div className="filter-category-box">
            <h4>Sun Requirements</h4>
            <div className="check-box-box">
              <input
                value="low sun"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>low sun</h5>
            </div>
            <div className="check-box-box">
              <input
                value="medium sun"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>medium sun</h5>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    succulents: state.succulents,
    selectedSucculents: state.selectedSucculents,
    selectedFilters: state.selectedFilters
  }
}

const mapDispatch = dispatch => {
  return {
    addFilter: selectedFilter => dispatch(addFilter(selectedFilter))
  }
}

export default connect(mapState, mapDispatch)(SideBar)
