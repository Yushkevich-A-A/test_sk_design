import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import { useSelector } from 'react-redux';

function ButtonState() {
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

export default ButtonState;
