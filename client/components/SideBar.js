import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import { addFilter, removeFilter } from '../store/filter'
import { selectSucculent, deselectSucculent } from '../store/selectedSucculents'

class SideBar extends Component {
  constructor () {
    super ()
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck (event) {
    const selectedFilter = event.target.value

    if (event.target.checked === true) {

      this.props.addFilter(selectedFilter)

      this.props.succulents.map(succ => {
        if (succ.cuteness === selectedFilter){
          this.props.selectSucculent(succ)
        }
      })

    } else {
      this.props.removeFilter(selectedFilter)

      this.props.selectedSucculents.map(succ => {
        if (succ.cuteness === selectedFilter){
          this.props.deselectSucculent(succ)
        }
      })
    }

  }

  render () {
    return (
      <div className="sidebar-wrapper">
        <Search />
        <br />
        <h3 className="karla-font">Filter Results by...</h3>
        <hr />
        <form>
          <div className="filter-category-box">
            <h4>💕 Cuteness</h4>
            <div className="check-box-box">
              <input
                value="wildly cute"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>wildly cute</h5>
              </div>
              <div className="check-box-box">
                <input
                  value="somewhat cute"
                  onChange={this.handleCheck}
                  type="checkbox"
                  className="checkbox"
                />
                <h5>somewhat cute</h5>
            </div>
            <div className="check-box-box">
                <input
                  value="just cuteish"
                  onChange={this.handleCheck}
                  type="checkbox"
                  className="checkbox"
                />
                <h5>just cuteish</h5>
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
    addFilter: selectedFilter => dispatch(addFilter(selectedFilter)),
    removeFilter: selectedFilter => dispatch(removeFilter(selectedFilter)),
    selectSucculent: selectedSucculent => dispatch(selectSucculent(selectedSucculent)),
    deselectSucculent: succulentToDeselect => dispatch (deselectSucculent(succulentToDeselect))
  }
}

export default connect(mapState, mapDispatch)(SideBar)
