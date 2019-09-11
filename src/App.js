/** @jsx jsx */
import React, { Component } from 'react';
import { jsx, css } from '@emotion/core';
import SearchControls from './SearchControls';
import ImagePane from './ImagePane';

const containerStyles = css`
  background-color: #fafafa;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 1rem;
`;

const cardStyles = css`
  width: 40rem;
  height: 40rem;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

class App extends Component {
  state = {
    gifUrl: '',
  };

  onSearch = async (searchString) => {
    try {
      // leaving api key embedded here for demo purposes. 
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=mkC442pRcCUmDCvFOMuvjslbuTIvxEbN&tag=${searchString}`);
      const result = await response.json();
      const { data: { image_url }} = result;

      this.setState({
        gifUrl: image_url,
      });
    } catch(err) {
      console.error(`An error occurred: ${err}`)
    }
  };

  render() {
    return (
      <div css={containerStyles}>
        <div css={cardStyles}>
          <SearchControls onSearch={this.onSearch} />
          <ImagePane url={this.state.gifUrl} />
        </div>
      </div>
    );
  };
}

export default App;
