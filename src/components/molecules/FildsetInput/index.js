import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Error from 'components/atoms/Error';

const StyledFildsetInput = styled.fieldset`
  position: relative;
  border: 2px solid ${ props => props.colorBorder || '#E3E3E3'};
  border-radius: 8px;
  padding: 14px 15px;
`


function FildsetInput(props) {
  const { error, placeholderText, labelText } = props;
  const [ action, setAction ] = useState(false);
  const [ colorState, setColorState ] = useState(null);

  useEffect(() => {
    if (action) {
      return setColorState('#0086A8'); 
    }
    if (error) {
      return setColorState('#EB5E55'); 
    } 
    setColorState(null);
  }, [action]) 

  return (
    <StyledFildsetInput colorBorder={colorState} onFocus={() => setAction(true)} onBlur={() => setAction(false)}>
      <Label labelText={labelText} color={colorState}></Label>
      <Input placeholderText={placeholderText}/>
      { error && <Error errorText={error}/>}
    </StyledFildsetInput>
  )
}

FildsetInput.propTypes = {}

export default FildsetInput
