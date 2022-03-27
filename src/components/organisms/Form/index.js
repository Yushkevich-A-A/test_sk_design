import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowForm from 'components/atoms/RowForm';
import FildsetInput from 'components/molecules/FildsetInput';
import FildsetDropdown from 'components/molecules/FildsetDropdown';
import AdditionalFormFields from '../AdditionalFormFields';
import cities from 'assets/JSONData/cities.json';
import sources from 'assets/JSONData/sources.json';
import dataDecorator from 'lib/dataDecorator';
import ButtonState from '../ButtonState';
import { useSelector } from 'react-redux';


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
  const { sendReady } = useSelector( state => state.sendState )


  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!sendReady) {
      return;
    }
    console.log('выполняем отправку на сервер');
  }

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <RowForm>
        <FildsetInput placeholderText='Иван' labelText='Ваше имя *'/>
        <FildsetInput placeholderText='+7 (000) 000-00-00' labelText='Номер телефона *'/>
      </RowForm>
      <RowForm>
        <FildsetInput placeholderText='example@skdesign.ru' labelText='E-mail *'/>
        <FildsetInput placeholderText='instagram.com/skde…' labelText='Ссылка на профиль *'/>
      </RowForm>
      <FildsetDropdown placeholderText='Выберите город *' list={cities}/> 

      <FildsetInput placeholderText='SK Design' labelText='Название организации/студии'/>
      <AdditionalFormFields>
        <FildsetInput placeholderText='ФИО' labelText='Получатель'/>
        <FildsetDropdown placeholderText='От куда узнали про нас?' list={dataDecorator(sources)}/> 
      </AdditionalFormFields>
      <ButtonState/>
    </StyledForm>
  )
}

Form.propTypes = {}

export default Form;
