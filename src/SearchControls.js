/** @jsx jsx */
import React, { useState } from 'react';
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

const SearchControls = ({ onSearch, isFetching }) => {
  const [value, setValue] = useState('martian');

  return (
    <div css={container}>
      <form onSubmit={(e) => { onSearch(value); e.preventDefault();}} css={form}>
        <label css={label} htmlFor='category-select'> Pick a category for your GIF: </label>
        <select css={select} id='category-select' value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="martian">Martian</option>
          <option value="random">Random</option>
        </select>
        <input type="submit" value="Get GIF!" css={button} disabled={isFetching}/>
      </form>
    </div>
  );
};

SearchControls.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchControls;