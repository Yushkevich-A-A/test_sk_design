import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Error from 'components/atoms/Error';
import { useDispatch, useSelector } from 'react-redux';
import { editItemForm, resetErrorField, setErrorField, setReadyField } from 'store/form/actions';
import ReactInputMask from 'react-input-mask';

const StyledFildsetInput = styled.fieldset`
  position: relative;
  border: 2px solid ${ props => props.colorBorder || '#E3E3E3'};
  border-radius: 8px;
  padding: 14px 15px;
  
  input {
    width: 100%;
  }
`;

function FildsetInput(props) {
  const { placeholderText, labelText, name, required, regValue, messageError, isPhone } = props;
  const [ action, setAction ] = useState(false);
  const [ colorState, setColorState ] = useState(null);
  const { [name]: dataField } = useSelector( store => store.manageForm );
  const dispatch = useDispatch();
  const idElement = v4();

  useEffect(() => {
    if (action) {
      return setColorState('#0086A8'); 
    }
    if (dataField.error) {
      return setColorState('#EB5E55'); 
    } 
    setColorState(null);
  }, [action, dataField]);

  const handleChange = (e) => {
    dispatch(editItemForm(name, e.target.value));
  }

  const handleFocus = () => {
    setAction(true);
    if (required) {
      dispatch(resetErrorField(name));
    }
  }

  const handleBlur = (e) => {
    const value = e.target.value;

    setAction(false);
    if (!required) {
      return;
    }

    if (value === '') {
      return dispatch(setErrorField(name, 'обязательное поле'));
    }

    if (!regValue.test(value)) {
      return dispatch(setErrorField(name, messageError))
    }

    dispatch(setReadyField(name));
  }

  return (
    <StyledFildsetInput colorBorder={colorState} onFocus={handleFocus} onBlur={handleBlur}>
      <Label labelText={labelText} color={colorState} inputFor={idElement}/>
        {isPhone && <ReactInputMask mask={'+7\\(999)-999-99-99'} maskChar=''
          placeholder={placeholderText} 
          name={name}
          id={idElement}
          value={dataField.value}
          onChange={handleChange}
          />}
        {!isPhone && <Input placeholderText={placeholderText} 
          name={name}
          inputFor={idElement} 
          handleChange={handleChange} 
          value={dataField.value}/>}
      { dataField.error && <Error errorText={dataField.error}/>}
    </StyledFildsetInput>
  )
}
FildsetInput.defaultProps = {
  validitylength: 2,
}

FildsetInput.propTypes = {}

export default FildsetInput
