import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDecriptionBlock = styled.div`
  margin-top: 40px;
`

function DecriptionBlock(props) {
  return (
    <StyledDecriptionBlock>
      {
        props.children
      }
    </StyledDecriptionBlock>
  )
}

DecriptionBlock.propTypes = {}

export default DecriptionBlock
