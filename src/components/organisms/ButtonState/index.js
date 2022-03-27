import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/Button'
import { useSelector } from 'react-redux';

function ButtonState(props) {
  const { loading, sendReady } =useSelector( state => state.sendState );
  return (
    <Button type={loading && 'loading' || !sendReady && 'disable'} message='Отправить заявку'/>
  )
}

ButtonState.propTypes = {}

export default ButtonState
