import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Error from 'components/atoms/Error';
import TextDropdown from 'components/atoms/TextDropdown';
import Label from 'components/atoms/Label';
import OpenArrow from 'components/atoms/OpenArrow';
import DropdownList from '../DropdownList';
import cities from 'assets/JSONData/cities.json';


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
  const { list, error, placeholderText} = props;
  const [ openList, setOpenList ] = useState(false);
  const [ colorState, setColorState ] = useState(null);
  const [ arrowType, setArrowType ] = useState('');
  const [ itemSelected, setItemSelected ] = useState(null);

  useEffect(() => {
    if (openList) {

      return setColorState('#0086A8'); 
    }
    if (error) {
      return setColorState('#EB5E55'); 
    } 
    setColorState(null);
  }, [openList]);

  const handleClick = () => {
    openList ? setArrowType('close') : setArrowType('open');
    setOpenList(!openList);
  }

  const handleSelectItem = (item) => {
    setItemSelected(item);
  }

  return (
    <StyleFildsetDropdown colorBorder={colorState} onClick={handleClick}>
      {openList && <Label labelText={placeholderText} color={colorState}></Label>}
      <WrapperContent>
        { !openList && <TextDropdown text={ itemSelected || placeholderText}/>}
        { openList && <TextDropdown text={ itemSelected || ''}/>}
        <OpenArrow type={arrowType}/>
      </WrapperContent>
      { openList && <DropdownList list={cities} handleClickOnItem={handleSelectItem}/>}
      { error && <Error errorText={error}/>}
    </StyleFildsetDropdown>
  )
}

FildsetDropdown.propTypes = {}

export default FildsetDropdown;