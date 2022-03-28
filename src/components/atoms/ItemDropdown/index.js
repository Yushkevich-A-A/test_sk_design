import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItemDropdown = styled.div`
  color: #353238;
  padding: 5px 15px;
  cursor: pointer;
  text-align: center;

  &:nth-child(n + 2) {
    border-top: 2px solid #E3E3E3;
  }

  &:hover {
    color: white;
    background: #0086A8;
  }
`;

function ItemDropdown(props) {
  const { item, handleClick } = props;

  return (
    <StyledItemDropdown onClick={() => handleClick(item)}>{item}</StyledItemDropdown>
  )
}

ItemDropdown.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func
};

export default ItemDropdown;
