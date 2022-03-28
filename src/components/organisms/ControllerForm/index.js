import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { readyStateForm, resetSendState } from 'store/sendState/action';

function ControllerForm(props) {
  const data = useSelector( store => store.manageForm );
  const { sendReady, loading } = useSelector( store => store.sendState );
  const dispatch = useDispatch();

  useEffect(() => {
    const keysArr = Object.keys(data)
    const fieldNotValid = keysArr.filter( item => !data[item].valid );
    if (fieldNotValid.length !== 0 && sendReady) {
      dispatch(resetSendState());
    }
    if (fieldNotValid.length === 0 && !sendReady && !loading) {
      dispatch(readyStateForm());
    }
  },[data])

  return (
    <div>
      { props.children }
    </div>
  )
}

ControllerForm.propTypes = {}

export default ControllerForm
