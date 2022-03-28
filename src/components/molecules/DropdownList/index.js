import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemDropdown from 'components/atoms/ItemDropdown';

const StyledList = styled.div`
  position: absolute;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  z-index: 10;
`

function DropdownList(props) {
  const { list, handleClickOnItem } = props;

  return (
    <StyledList>
      {
        list.map( item => <ItemDropdown key={item.id} item={item.name} handleClick={handleClickOnItem}/>)
      }
    </StyledList>
  )
}

DropdownList.propTypes = {
  list: PropTypes.array, 
  handleClickOnItem: PropTypes.func,
}

export default DropdownList
