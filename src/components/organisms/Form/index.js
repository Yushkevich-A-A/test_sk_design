import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowForm from 'components/atoms/RowForm';
import FildsetInput from 'components/molecules/FildsetInput';
import FildsetDropdown from 'components/molecules/FildsetDropdown';
import Button from 'components/atoms/Button';

const StyledForm = styled.form`
  max-width: 440px;
  width: 100%;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

function Form(props) {
  return (
    <StyledForm>
      <RowForm>
        <FildsetInput placeholderText='Иван' labelText='Ваше имя *'/>
        <FildsetInput placeholderText='+7 (000) 000-00-00' labelText='Номер телефона *'/>
      </RowForm>
      <RowForm>
        <FildsetInput placeholderText='example@skdesign.ru' labelText='E-mail *'/>
        <FildsetInput placeholderText='instagram.com/skde…' labelText='Ссылка на профиль *'/>
      </RowForm>
      <FildsetDropdown placeholderText='Выберите город *' labelText='Выберите город *'/> 

      <FildsetInput placeholderText='SK Design' labelText='Название организации/студии'/>



      <Button type='disable' message='Отправить заявку'/>

    </StyledForm>
  )
}

Form.propTypes = {}

export default Form;
