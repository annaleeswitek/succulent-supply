import React, { Component } from 'react'
import { connect } from 'react-redux'

class Search extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const inputValue = this.state.inputValue

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Enter a succulent"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    succulents: state.succulents
  }
}

export default connect(mapState)(Search)
