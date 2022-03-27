import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/Button'
import { useSelector } from 'react-redux';

function ButtonState(props) {
  const { loading, sendReady } = useSelector( state => state.sendState );
  const [ type, setType ] = useState('disable');

  useEffect(() => {
    if (loading) {
      return setType('loading');
    }
    if (!sendReady) {
      return setType('disable');
    }
    return setType('enable');
  }, [loading, sendReady])

  return (
    <Button type={type} message='Отправить заявку'/>
  )
}

ButtonState.propTypes = {}

export default ButtonState
