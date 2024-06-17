import React from 'react'
import './Container.scss'

const Container = ({children}) => {
  return (
    <div className='layout-container'>
        {children}
    </div>
  )
}

export default Container