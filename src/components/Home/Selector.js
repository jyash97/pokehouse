import React from 'react';
import {connect} from 'react-redux';

import {filterType} from '../../utils/actions';
import {Select} from '../../utils/styleComponents';

class Selector extends React.Component {
  constructor () {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    }, () => this.props.handleFilter(this.state.value));
  }

  render () {
    return (
      <Select onChange={this.handleChange} value={this.state.value}>
        <option value=''>All</option>
        <option value='fire'>Fire</option>
        <option value='ground'>Ground</option>
        <option value='water'>Water</option>
        <option value='bug'>Bug</option>
        <option value='flying'>Flying</option>
        <option value='grass'>Grass</option>
        <option value='poison'>Poison</option>
      </Select>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleFilter (text) {
    dispatch(filterType(text));
  }
});

export default connect(null, mapDispatchToProps)(Selector);
