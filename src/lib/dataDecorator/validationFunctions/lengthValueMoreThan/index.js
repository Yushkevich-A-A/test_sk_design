export  const lengthValueMoreThan = (len, value, message, callbackError, callbackSuccess) => {
    if (value.length < len) {
      return callbackError(message)
    }
    callbackSuccess()
}