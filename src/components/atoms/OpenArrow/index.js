import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import arrow from 'assets/svg/icon-arrow.svg';

const StyledOpenArrow = styled.img`
  @keyframes open-arrow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(180deg); }
  } 

  @keyframes close-arrow {
    0% { transform: rotate(180deg); }
    100% { transform: rotate(0deg); }
  } 

  display: block;

  &.open {
    animation: open-arrow 0.2s linear forwards;
  }

  &.close {
    animation: close-arrow 0.2s linear forwards;
  }
`

function OpenArrow(props) {
  const { type } = props;

  return (
    <StyledOpenArrow className={type} src={arrow}/>
  )
}

OpenArrow.propTypes = {}

export default OpenArrow
