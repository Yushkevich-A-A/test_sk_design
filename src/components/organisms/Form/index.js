import React from 'react';
import styled from 'styled-components';
import RowForm from 'components/atoms/RowForm';
import FildsetInput from 'components/molecules/FildsetInput';
import FildsetDropdown from 'components/molecules/FildsetDropdown';
import AdditionalFormFields from '../AdditionalFormFields';
import cities from 'assets/JSONData/cities.json';
import sources from 'assets/JSONData/sources.json';
import dataDecorator from 'lib/dataDecorator';
import ButtonState from '../ButtonState';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidateAllRequiredFields } from 'store/form/actions';
import { sentDataToServer } from 'store/sendState/action';

const StyledForm = styled.form`
  max-width: 440px;
  width: 100%;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`

function Form() {
  const data = useSelector( state => state.manageForm );
  const { sendReady } = useSelector( state => state.sendState );
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!sendReady) {
      return dispatch(checkValidateAllRequiredFields(data));
    }
    dispatch(sentDataToServer(data));
  }

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <RowForm>
        <FildsetInput placeholderText='Иван' labelText='Ваше имя *' name='name' required={true} regValue={/.{2}/} messageError={'введите больше 2х символов'} />
        <FildsetInput placeholderText='+7 (000) 000-00-00' labelText='Номер телефона *' name='phone' required={true} isPhone={true} regValue={/(.*\d.*){11}/} messageError={'номер не корректный'}/>
      </RowForm>
      <RowForm>
        <FildsetInput placeholderText='example@skdesign.ru' labelText='E-mail *' name='mail' required={true} regValue={/.+@.+\..+/} messageError={'введите корректный e-mail'}/>
        <FildsetInput placeholderText='instagram.com/skde…' labelText='Ссылка на профиль *' name='link' required={true} regValue={/.{3}/} messageError={'введите корректную ссылку'}/>
      </RowForm>
      <FildsetDropdown placeholderText='Выберите город *' list={cities} name='city' required={true}/> 

      <FildsetInput placeholderText='SK Design' labelText='Название организации/студии' name='name_org'/>
      <AdditionalFormFields>
        <FildsetInput placeholderText='ФИО' labelText='Получатель' name='recipient'/>
        <FildsetDropdown placeholderText='От куда узнали про нас?' list={dataDecorator(sources)} name='came_from'/> 
      </AdditionalFormFields>
      <ButtonState/>
    </StyledForm>
  )
}

export default Form;
