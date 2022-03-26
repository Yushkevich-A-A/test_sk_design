import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLegend = styled.legend`

  font-family: 'SF UI Display';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${ props => props.textColor || '#828282'};
  margin-left: 10px;
  padding-left: 5px;
  padding-right: 5px;
`

function Legend(props) {
  const { legendText, color } = props;
  
  return (
    <StyledLegend textColor={color}>{legendText || 'текст не был указан'}</StyledLegend>
  )
}

Legend.propTypes = {
  legendText: PropTypes.string,
  color: PropTypes.string,
}

export default Legend;
