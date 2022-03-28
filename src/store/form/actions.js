export const editItemForm = (nameField, value ) => {
  return { type: 'EDIT_ITEM_FORM', payload: { nameField, value }};
}

export const setErrorField = (errorField, error ) => {
  return { type: 'SET_ERROR_FIELD', payload: { errorField, error }};
}

export const resetErrorField = (resetErrorField ) => {
  return { type: 'RESET_ERROR_FIELD', payload: { resetErrorField }};
}

export const setReadyField = (readyField ) => {
  return { type: 'SET_READY_FIELD', payload: { readyField }};
}

export const resetForm = () => {
  return { type: 'RESET_FORM' };
}

export const checkValidateAllRequiredFields = (data) => async (dispatch, getState) => {
  const keysFields = Object.keys(data);
  const requiredAndInvaliedFields = keysFields.filter( item => {
    if ( data[item].value === '' && !data[item].valid ) {
      return item;
    }
  });
  requiredAndInvaliedFields.forEach( item => dispatch(setErrorField(item, 'обязательное поле')));
}