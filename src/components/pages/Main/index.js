import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Description from 'components/organisms/Description';
import Form from 'components/organisms/Form';

const StiledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 60px;
  padding-top: 12%;
`

function Main(props) {
  return (
     <StiledMain>
       <Description />
       <Form />
     </StiledMain>
  )
}

Main.propTypes = {}

export default Main;
