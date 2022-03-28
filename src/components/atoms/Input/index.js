import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  line-height: 100%;
`

function Input(props) {
  const { placeholderText, name, inputFor, handleChange, value } = props;

  return (
    <StyledInput  placeholder={placeholderText || 'Введите текст'} 
                  name={name} 
                  id={inputFor} 
                  onChange={handleChange}
                  value={value}
                  />
  )
}

Input.propTypes = {
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  inputFor: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
