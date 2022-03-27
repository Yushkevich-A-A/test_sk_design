const initSendState = {
  loading: false,
  sendReady: false,
}

const serviceSendState = (state = initSendState, action) => {
  switch (action.type) {
    case 'READY_STATE_FORM': 
    return {...state, loading: false, sendReady: true};
    case 'SEND_FORM': 
      return {...state, loading: true, sendReady: false};
    case 'RESET_SEND_STATE':
      return {...initSendState};
    default:
      return {...state};
  }
}

export default serviceSendState;