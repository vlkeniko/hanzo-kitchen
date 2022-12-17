import React from 'react'
import HotnCold from '../components/HotnCold'



export default function HomePage() {
  return (
    <div>
      {/*Header*/}
      <div className='header'>
        <h1 className='headertitle'>Home</h1>
      </div>
      {/*Header end*/}

      <h1 className='bigtitle'>Prep list & Order list maker</h1>
      <HotnCold />
    </div>
  )
}
