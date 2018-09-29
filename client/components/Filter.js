import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFilter, removeFilter } from '../store/filter'
import { selectSucculent, deselectSucculent } from '../store/selectedSucculents'

class Filter extends Component {
  constructor () {
    super ()
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck (event) {
    const selectedFilter = event.target.value

    if (event.target.checked === true) {

      this.props.addFilter(selectedFilter)

      this.props.succulents.map(succ => {
        if (succ.category.title === selectedFilter){
          this.props.selectSucculent(succ)
        }
      })

    } else {
      this.props.removeFilter(selectedFilter)

      this.props.selectedSucculents.map(succ => {
        if (succ.category.title === selectedFilter){
          this.props.deselectSucculent(succ)
        }
      })
    }

  }

  render () {
    console.log(this.props.succulents)
    return (
      <div className="filter-box">
        <form>
          <div>
            <div>
              <input
                value="flowering"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>flowering</h5>
            </div>
            <div>
              <input
                value="cactus"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>cacti</h5>
            </div>
            <div>
              <input
                value="tiny"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>tiny succulents</h5>
            </div>
            <div>
              <input
                value="staff favorite"
                onChange={this.handleCheck}
                type="checkbox"
                className="checkbox"
              />
              <h5>staff favorites</h5>
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

export default connect(mapState, mapDispatch)(Filter)
