import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class SucculentList extends Component {
  render () {

    return (
      <div></div>
    )
  }
}

const mapState = state => {
  return {
    succulents: state.succulents
  }
}

export default connect(mapState)(SucculentList);

// SucculentList.propTypes = {
//   succulents: PropTypes.array
// }
