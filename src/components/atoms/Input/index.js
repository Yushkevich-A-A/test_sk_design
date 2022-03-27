import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  line-height: 100%;
`

function Input(props) {
  const { placeholderText } = props;
  return (
    <StyledInput placeholder={placeholderText || 'Введите текст'}/>
  )
}

Input.propTypes = {
  placeholderText: PropTypes.string,
};

export default Input;
