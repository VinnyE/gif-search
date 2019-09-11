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
`;

const ImagePane = ({ url }) => {
  return (
    <div css={container}>
      <img src={url} alt="" css={image} />
    </div>
  );
};

export default ImagePane;