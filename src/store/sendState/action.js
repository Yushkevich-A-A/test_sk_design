import prepareDataToSend from "lib/prepareDataToSend";
import { resetAdditionalMenu } from "store/additionalMenu/actions";
import { resetForm } from "store/form/actions";

export const readyStateForm = () => {
  return { type: 'READY_STATE_FORM' };
}

export const sendForm = () => {
  return { type: 'SEND_FORM' };
}

export const resetSendState = () => {
  return { type: 'RESET_SEND_STATE' };
}

export const sentDataToServer = (data) => async (dispatch, getState) => {
  const prepandedData = prepareDataToSend(data);
  dispatch(sendForm());
  setTimeout(() => {
    console.log(prepandedData);
    dispatch(resetSendState());
    dispatch(resetAdditionalMenu());
    dispatch(resetForm());
  }, 1000 * 2);
}