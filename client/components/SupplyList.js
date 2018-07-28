import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class SupplyList extends Component {
  render () {
    return (
      <div></div>
    )
  }
}

const mapState = state => {
  return {
    supplies: state.supplies
  }
}

export default connect(mapState)(SupplyList);

SupplyList.propTypes = {
  supplies: PropTypes.array
}
