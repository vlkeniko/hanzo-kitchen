import React from 'react'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom'

export default function ListMakerIngredients() {
  return (
    <div>
      <div className='header'>
      <Link to="/components"><img src={Back} alt="back-button" to="/list" /></Link>
        <h1>Ingredients</h1>
      </div>
    </div>
  )
}
