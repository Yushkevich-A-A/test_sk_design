import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItemDropdown = styled.div`
  display: inline-block;
  color: #353238;
  padding: 5px 15px;
  cursor: pointer;

  &:nth-child(n + 2) {
    border-top: 2px solid #E3E3E3;
  }
`;

function ItemDropdown(props) {
  const { item } = props;
  return (
    <StyledItemDropdown>{item}</StyledItemDropdown>
  )
}

ItemDropdown.propTypes = {}

export default ItemDropdown
