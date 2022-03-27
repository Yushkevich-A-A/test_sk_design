import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Error from 'components/atoms/Error';
import { useDispatch, useSelector } from 'react-redux';
import { editItemForm, resetErrorField, setErrorField, setReadyField } from 'store/form/actions';

const StyledFildsetInput = styled.fieldset`
  position: relative;
  border: 2px solid ${ props => props.colorBorder || '#E3E3E3'};
  border-radius: 8px;
  padding: 14px 15px;
`


function FildsetInput(props) {
  const { placeholderText, labelText, name, required, validitylength } = props;
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
  }, [action]);

  const handleChange = (e) => {
    dispatch(editItemForm(name, e.target.value));
  }

  const handleFocus = () => {
    setAction(true);
    if (required) {
      dispatch(resetErrorField(name));
    }
  }

  const handleBlur = () => {
    setAction(false);
    if (!required) {
      return;
    }

    if (dataField.value === '') {
      return dispatch(setErrorField(name, 'обязательное поле'))
    }
    
    if (dataField.value.length < validitylength) {
      return dispatch(setErrorField(name, 'введите полные данные'))
    }

    dispatch(setReadyField(name));
  }

  return (
    <StyledFildsetInput colorBorder={colorState} onFocus={handleFocus} onBlur={handleBlur}>
      <Label labelText={labelText} 
        color={colorState} 
        inputFor={idElement}
        ></Label>
      <Input placeholderText={placeholderText} 
        name={name} 
        inputFor={idElement} 
        handleChange={handleChange} 
        value={dataField.value}/>
      { dataField.error && <Error errorText={dataField.error}/>}
    </StyledFildsetInput>
  )
}
FildsetInput.defaultProps = {
  validitylength: 2,
}

FildsetInput.propTypes = {}

export default FildsetInput
