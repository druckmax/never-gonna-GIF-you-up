import React from 'react'
import './ErrorModal.scss'

import { useContext } from 'react'
import { MainContext } from '../../context/context'

function ErrorModal() {
  const context = useContext(MainContext)

  return (
    <div className='errorModalContainer'>
      <h2>Sorry, we're having difficulties 😔</h2>
      <p>{context.errorMsg}</p>
    </div>
  )
}

export default ErrorModal