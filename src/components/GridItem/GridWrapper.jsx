import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

function GridWrapper({children}) {
  const lightswitch = useContext(ThemeContext)

  return (
    <div className={`grid-container ${lightswitch.theme === 'light' && 'grid-container-light'}`}>
      {children}
    </div>
  )
}

export default GridWrapper