import React from 'react'
import Nav from '../components/Nav'
import Back from '../pictures/back.svg'
import Error from "../pictures/error.png"
export default function Construction() {
  return (
    <div>
       <div className='header'>
        <img src={Back} alt="back-button"  className='backbutton'/>
        <h1 className='headertitle'>Oh no!</h1>
      </div>
      <img src={Error} alt="back-button"  className='backbutton'/>
      <h1 className='unavailable1'>This page is unavailable</h1>
      <p className='unavailable2'>Come back later to see a list maker for the Hot Section too!</p>
      <Nav />
    </div>
  )
}
