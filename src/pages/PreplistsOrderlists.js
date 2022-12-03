import React from 'react'

import TabListList from '../components/TabListList'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom'
import BigPlus from '../pictures/BigPlus.svg'


export default function PreplistsOrderlists() {
  return (
    <div>
       <div className='header'>
       <Link to="/"><img src={Back} alt="back-button" to="/list" /></Link>
        <h1>Lists</h1>
      </div>
      <TabListList/>
      <Link to="/components"><img src={BigPlus} alt="BigPlus"/></Link>
    </div>
  )
}
