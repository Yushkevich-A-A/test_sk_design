import React from 'react';
import styled from 'styled-components';
import logo from 'assets/svg/logo.svg';

const StyledLogo = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 70px;
`

function Logo() {
  return (
    <StyledLogo src={logo} />
  )
}

export default Logo;
