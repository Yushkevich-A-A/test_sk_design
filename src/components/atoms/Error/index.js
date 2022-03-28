import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledError = styled.div`
  font-size: 12px;
  position: absolute;
  color: #EB5E55;
  bottom: -16px;
  z-index: -1;
  white-space: nowrap;
`

function Error(props) {
  const { errorText } = props;

  return (
    <StyledError>{errorText}</StyledError>
  )
}

Error.propTypes = {
  errorText: PropTypes.string,
}

export default Error;
