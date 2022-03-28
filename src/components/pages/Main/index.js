import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Description from 'components/organisms/Description';
import Form from 'components/organisms/Form';
import ControllerForm from 'components/organisms/ControllerForm';

const StiledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 60px;
  padding-top: 12%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`

function Main(props) {
  return (
     <StiledMain>
       <Description />
       <ControllerForm>
         <Form />
       </ControllerForm>
     </StiledMain>
  )
}

Main.propTypes = {}

export default Main;
