import React, { useEffect } from 'react'
import fn from "../js/fn"

const Alert = () => {

  return (
    <div className='alertContainer' id="alert">
      <div className='alertDiv'>
        <label className='labelAlert' id="textAlert"></label>
        <button className='button' onClick={() => fn.closeAlert()}>Aceptar</button>
      </div>
    </div>
  )
}

export default Alert