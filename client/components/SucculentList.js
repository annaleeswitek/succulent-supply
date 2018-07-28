import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSucculents } from '../store/succulents'

class SucculentList extends Component {
  componentDidMount(){
    this.props.fetchSucculents()
  }
  render () {
    const { succulents } = this.props
    return (
      <div>
      {
        succulents.length && succulents.map(succ => {
          return (
            <div key={succ.id} >
              <h1>{succ.name}</h1>
              <img src={succ.image} />
            </div>
          )
        })
      }
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
