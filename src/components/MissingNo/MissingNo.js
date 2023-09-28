import React from 'react'
import './MissingNo.css'
import missingnumber from './MissingNo.png'

function MissingNo() {
  return (
    <div>
        <h1>404 Error: MissingNo</h1>
        <img className='MissingNo-image' src={missingnumber} alt='MissingNo' />
    </div>
  )
}

export default MissingNo