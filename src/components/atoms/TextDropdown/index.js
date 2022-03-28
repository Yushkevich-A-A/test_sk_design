import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextDropdown = styled.div`
  color: #353238;
  cursor: pointer;
`

function TextDropdown(props) {
  const { text } = props;
  return (
    <StyledTextDropdown>{text}</StyledTextDropdown>
  )
}

TextDropdown.propTypes = {
  text: PropTypes.string,
}

export default TextDropdown
