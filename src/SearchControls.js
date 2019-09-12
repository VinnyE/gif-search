/** @jsx jsx */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core'

const form = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F7FAFC;
  padding: 0 1rem;
`;

const label = css`
  padding: 0.5rem;
`;

const select = css`
  width: 65%;
  margin-bottom: 2rem;
`;

const button = css`
  padding: 1rem;
  display: block;
  background-color: #4299e1;
  border: 0 solid #e2e8f0;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    background-color: ##4299CC;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

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
    const { isFetching } = this.props;

    return (
      <div css={container}>
        <form onSubmit={this.handleSubmit} css={form}>
          <label css={label} htmlFor='category-select'> Pick a category for your GIF: </label>
          <select css={select} id='category-select' value={value} onChange={this.handleSelectionChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="martian">Martian</option>
            <option value="random">Random</option>
          </select>
          <input type="submit" value="Get GIF!" css={button} disabled={isFetching}/>
        </form>
      </div>
    );
  }
};

export default SearchControls;