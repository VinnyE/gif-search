/** @jsx jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core'

class SearchControls extends Component {
  static propTypes = {
    onSearch: PropTypes.func,
  };

  state = {
    value: 'martian',
  };

  handleSelectionChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  handleSubmit = (event) => {
    const { onSearch } = this.props;
    const { value } = this.state;

    onSearch(value);
    event.preventDefault();
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label> Pick a category for your GIF:
          <select value={value} onChange={this.handleSelectionChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="martian">Martian</option>
            <option value="random">Random</option>
          </select>
        </label>
        <input type="submit" value="Get GIF!" />
      </form>
    );
  }
};

export default SearchControls;