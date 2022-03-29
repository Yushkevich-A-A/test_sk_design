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
    document.addEventListener('click', closeList);
    return () => document.removeEventListener('click', closeList);
  }, []);

  useEffect(() => {
    if (openList) {
      setColorState('#0086A8'); 
    } else if (dataField.error) {
      setColorState('#EB5E55'); 
    } else {
      setColorState(null);
    }

    if ( !openList && arrowType === '') {
      return;
    };
    !openList ? setArrowType('close') : setArrowType('open');
    
  }, [openList, dataField]);

  const handleClick = () => {
    observeOpenList();
    handleValidate(dataField.value);
  }

  const handleSelectItem = (item) => {
    observeOpenList();
    dispatch(editItemForm(name, item));
    handleValidate(item);
  }

  const observeOpenList = () => {
    setOpenList(!openList);
  }

  const handleValidate = (item) => {
    if (!required) {
      return;
    }
    if (item === '') {
      return dispatch(setErrorField(name, 'обязательное поле'));
    }
    dispatch(setReadyField(name));
  }

  const closeList = (e) => {
    if (!e.target.closest(`.${name}`)) {
      setOpenList(false);
    }
  }

  return (
    <StyleFildsetDropdown colorBorder={colorState} className={name}>
      {openList && <Label labelText={placeholderText} color={colorState}></Label>}
      <WrapperContent onClick={handleClick}>
        { !openList && <TextDropdown text={ dataField.value || placeholderText}/>}
        { openList && <TextDropdown text={ dataField.value || ''}/>}
        <OpenArrow type={arrowType}/>
      </WrapperContent>
      { openList && <DropdownList list={list} handleClickOnItem={handleSelectItem}/>}
      { dataField.error && <Error errorText={dataField.error}/>}
    </StyleFildsetDropdown>
  )
}

FildsetDropdown.propTypes = {
  placeholderText: PropTypes.string, 
  list: PropTypes.array, 
  labelText: PropTypes.string,
  name: PropTypes.string, 
  required: PropTypes.bool
}

export default FildsetDropdown;