import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search'

class SideBar extends Component {
  constructor () {
    super ()
    this.state = {

    }

  }

  render () {
    return (
      <div className="sidebar-wrapper">
        <Search />
        <br />
        <h3 className="karla-font"><u>Filter Results</u></h3>
        <br />
        <div className="filter-category-box">
          <h4>💕 Cuteness</h4>
          <input type="checkbox" />
          <h5>widly</h5>
          <input type="checkbox" />
          <h5>very</h5>
          <input type="checkbox" />
          <h5>kinda</h5>
        </div>
        <h4>☀️ Sun</h4>
          <input type="checkbox" /><h5>direct</h5>
          <input type="checkbox" /><h5>partial</h5>
          <input type="checkbox" /><h5>low</h5>
        <h4>💵 Price</h4>
        <h4>🙌 Staff Favorites</h4>
        <h4>💯 Higest Rated</h4>
      </div>
    )
  }
}

const mapState = state => {

}

const mapDispatch = dispatch => {

}

export default connect(mapState, mapDispatch)(SideBar)
