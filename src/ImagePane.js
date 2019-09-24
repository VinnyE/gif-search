/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core'

const image = css`
  max-width: 100%;
`;

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0FFF4;
  padding: 0 1rem;
`;

const ImagePane = ({ url }) => {
  const renderedComponent = url
  ? (<img src={url} alt="Some GIF" css={image} />) : (<p>Try getting a GIF!</p>);

  return (
    <div css={container}>
      {renderedComponent}
    </div>
  );
};

ImagePane.propTypes = {
  url: PropTypes.string,
};

export default ImagePane;