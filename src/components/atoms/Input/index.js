import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 7px 15px 18px;
  border-radius: 8px;
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
