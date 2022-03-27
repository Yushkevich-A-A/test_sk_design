import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: 'SF UI Display';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  margin-top: 40px;
`

function H2(props) {
  return (
    <StyledH2>
      {
        props.children
      }
    </StyledH2>
  )
}

H2.propTypes = {}

export default H2
