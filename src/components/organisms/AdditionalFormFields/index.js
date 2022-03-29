import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OpenArrow from 'components/atoms/OpenArrow';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAdditionalMenu } from 'store/additionalMenu/actions';

const StyledAdditionalFormFields = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
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
  const { isOpen } = useSelector( state => state.openAdditionalMenu );
  const dispatch = useDispatch();
  const [ blockState, setBlockState ] = useState(null);

  useEffect(() => {
    if (!isOpen && !blockState ) {
      return;
    };
    !isOpen ? setBlockState('close') : setBlockState('open');
  }, [isOpen])

  const handleClick = () => {
    dispatch(toggleAdditionalMenu());
  }

  return (
    <StyledAdditionalFormFields>
      <StyledToggleBlock onClick={handleClick}>
        <StyledToggleBlockText>
          { isOpen ? 'Скрыть дополнительные поля' : 'Показать дополнительные поля'}
        </StyledToggleBlockText>
        <OpenArrow type={blockState} />
      </StyledToggleBlock>
      {
        isOpen && props.children
      }
    </StyledAdditionalFormFields>
  )
}

export default AdditionalFormFields;
