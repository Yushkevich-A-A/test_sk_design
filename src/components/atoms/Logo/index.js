import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from 'assets/svg/logo.svg';

const StyledLogo = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 70px;
`

function Logo(props) {
  return (
    <StyledLogo src={logo} />
  )
}

Logo.propTypes = {}

export default Logo
