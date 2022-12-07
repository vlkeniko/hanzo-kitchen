import React from 'react'
import Nav from '../components/Nav'
import Back from '../pictures/back.svg'

export default function Construction() {
  return (
    <div>
       <div className='header'>
        <img src={Back} alt="back-button"  className='backbutton'/>
        <h1 className='headertitle'>Oh no!</h1>
      </div>
      <h1 className='bigtitle'>Oh no! The page is under construction</h1>
      <Nav/>
    </div>
  )
}
