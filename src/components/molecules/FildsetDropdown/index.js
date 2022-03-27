import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Error from 'components/atoms/Error';
import TextDropdown from 'components/atoms/TextDropdown';
import Label from 'components/atoms/Label';
import OpenArrow from 'components/atoms/OpenArrow';
import DropdownList from '../DropdownList';
import { editItemForm, setErrorField, setReadyField } from 'store/form/actions';
import { useDispatch, useSelector } from 'react-redux';


const StyleFildsetDropdown = styled.fieldset`
  position: relative;
  border: 2px solid ${ props => props.colorBorder || '#E3E3E3'};
  border-radius: 8px;
`

const WrapperContent = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

function FildsetDropdown(props) {
  const { placeholderText, list, labelText, name, required } = props;
  const [ openList, setOpenList ] = useState(false);
  const [ colorState, setColorState ] = useState(null);
  const [ arrowType, setArrowType ] = useState('');
  const { [name]: dataField } = useSelector( store => store.manageForm );
  const dispatch = useDispatch();


  useEffect(() => {
    if (openList) {
      return setColorState('#0086A8'); 
    }
    if (dataField.error) {
      return setColorState('#EB5E55'); 
    } 
    setColorState(null);
  }, [openList]);

  const handleClick = () => {
    openList ? setArrowType('close') : setArrowType('open');
    setOpenList(!openList);
    handleValidate(dataField.value);
  }

  const handleSelectItem = (item) => {
    dispatch(editItemForm(name, item));
    handleValidate(item);
  }

  const handleValidate = (item) => {
    if (!required) {
      return;
    }
    if (item === '') {
      return dispatch(setErrorField(name, 'обязательное поле'))
    }
    dispatch(setReadyField(name));
  }

  return (
    <StyleFildsetDropdown colorBorder={colorState} onClick={handleClick}>
      {openList && <Label labelText={placeholderText} color={colorState}></Label>}
      <WrapperContent>
        { !openList && <TextDropdown text={ dataField.value || placeholderText}/>}
        { openList && <TextDropdown text={ dataField.value || ''}/>}
        <OpenArrow type={arrowType}/>
      </WrapperContent>
      { openList && <DropdownList list={list} handleClickOnItem={handleSelectItem}/>}
      { dataField.error && <Error errorText={dataField.error}/>}
    </StyleFildsetDropdown>
  )
}

FildsetDropdown.propTypes = {}

export default FildsetDropdown;