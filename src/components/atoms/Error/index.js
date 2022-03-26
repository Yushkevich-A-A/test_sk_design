import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledError = styled.div`
  font-size: 12px;
  position: absolute;
  color: #EB5E55;
  padding-top: 8px;
  padding-left: 15px;
  z-index: -1;

`

function Error(props) {
  const { errorText } = props;

  return (
    <StyledError>{errorText}</StyledError>
  )
}

Error.propTypes = {}

export default Error;
