import React from 'react'

import TabListList from '../components/TabListList'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom'
import BigPlus from '../pictures/big-plus.svg'


export default function PreplistsOrderlists() {
  return (
    <div>
      {/*Header*/}
      <div className='header'>
        <Link className='backbutton' to="/"><div><img src={Back} alt="back-button" navigate="/" /></div></Link>
        <h1 className='headertitle'>Lists</h1>
      </div>
      {/*Header end*/}

      <TabListList />
      <Link to="/dishes" className="bigplus"><img className="bigplusimage" src={BigPlus} alt="BigPlus" /></Link>
    </div>
  )
}
