import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemDropdown from 'components/atoms/ItemDropdown';

const StyledList = styled.div`
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  
`

function DropdownList(props) {
  const { list } = props;

  return (
    <StyledList>
      {
        list.map( item => <ItemDropdown key={item.id} item={item.name}/>)
      }
    </StyledList>
  )
}

DropdownList.propTypes = {}

export default DropdownList
