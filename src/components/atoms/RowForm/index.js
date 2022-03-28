import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRowForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  column-gap: 20px;

  fieldset {
    width: 100%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
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
