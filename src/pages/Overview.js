import React from 'react'
import Back from '../pictures/back.svg'

export default function Overview() {
  return (
    <div>
      <div className='header'>
        <img src={Back} alt="back-button" to="/ingredients"/>
        <h1>Overview</h1>
      </div>
    </div>
  )
}
