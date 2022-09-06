import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../../context/context'

function GridWrapper({children}) {
  const lightswitch = useContext(MainContext)

  return (
    <div className={`grid-container ${lightswitch.theme === 'light' && 'grid-container-light'}`}>
      {children}
    </div>
  )
}

export default GridWrapper