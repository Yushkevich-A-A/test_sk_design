import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.div`
  line-height: 150%;
  word-break: normal;

  &:nth-child(n + 2) {
    margin-top: 21px;
  }
`

function Paragraph(props) {
  return (
    <StyledParagraph>
      {
        props.children
      }
    </StyledParagraph>
  )
}

Paragraph.propTypes = {}

export default Paragraph
