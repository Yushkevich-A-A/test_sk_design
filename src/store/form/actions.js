export const editItemForm = (nameField, value ) => {
  return { type: 'EDIT_ITEM_FORM', payload: { nameField, value }}
}

export const setErrorField = (errorField, error ) => {
  return { type: 'SET_ERROR_FIELD', payload: { errorField, error }}
}

export const resetErrorField = (resetErrorField ) => {
  return { type: 'RESET_ERROR_FIELD', payload: { resetErrorField }}
}

export const setReadyField = (readyField ) => {
  return { type: 'SET_READY_FIELD', payload: { readyField }}
}