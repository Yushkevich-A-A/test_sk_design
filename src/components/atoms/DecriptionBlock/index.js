import React from 'react';
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

export default DecriptionBlock;
