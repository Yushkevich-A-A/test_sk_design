import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OpenArrow from 'components/atoms/OpenArrow';

const StyledAdditionalFormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledToggleBlock = styled.div`
  display: flex;
  justify-content: felx-start;
  align-items: center;
  gap: 8px;
`

const StyledToggleBlockText = styled.div`
  line-height: 150%;
`

function AdditionalFormFields(props) {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ blockState, setBlockState ] = useState(null);

  const handleClick = () => {
    isOpen ? setBlockState('close') : setBlockState('open');
    setIsOpen(!isOpen);
  }

  return (
    <StyledAdditionalFormFields>
      <StyledToggleBlock onClick={handleClick}>
        <StyledToggleBlockText>
          Скрыть дополнительные поля
        </StyledToggleBlockText>
        <OpenArrow type={blockState} />
      </StyledToggleBlock>
      {
        isOpen && props.children
      }
    </StyledAdditionalFormFields>
  )
}

AdditionalFormFields.propTypes = {}

export default AdditionalFormFields