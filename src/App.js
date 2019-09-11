/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

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

function App() {
  return (
    <div css={containerStyles}>
      <div css={cardStyles}>
        <div>Left Content</div>
        <div>Right Content</div>
      </div>
    </div>
  );
}

export default App;
