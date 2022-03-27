import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRowForm = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  gap: 20px;
`

function RowForm(props) {
  return (
    <StyledRowForm>
      {
        props.children
      }
    </StyledRowForm>
  )
}

RowForm.propTypes = {}

export default RowForm
