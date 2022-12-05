import React from "react";
import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import Back from '../pictures/back.svg';
import BigPlus from '../pictures/BigPlus.svg';

export default function ListMakerIngredients() {
  return (
    <div>
        {/*Header*/}
        <div className='header'>
        <Link to="/components"><img src={Back} alt="back-button" to="/list" /></Link>
        <h1>Dishes</h1>
        <ListDialog/>
      </div>
        <h1>Ingredients</h1>
        <Link to="/overview"><img src={BigPlus} alt="BigPlus"/></Link>

    </div>
  )
}
