import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: absolute;
  background-color: #FFF;
  top: -7px;
  left: 0;
  font-family: 'SF UI Display';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${ props => props.textColor || '#828282'};
  margin-left: 10px;
  padding-left: 5px;
  padding-right: 5px;
`

function Label(props) {
  const { labelText, color, inputFor } = props;
  
  return (
    <StyledLabel textColor={color} htmlFor={inputFor}>{labelText || 'текст не был указан'}</StyledLabel>
  )
}

Label.propTypes = {
  labelText: PropTypes.string,
  color: PropTypes.string,
}

export default Label;
