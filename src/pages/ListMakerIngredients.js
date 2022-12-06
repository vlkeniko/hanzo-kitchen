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
        <Link  className='backbutton' to="/components"><div><img src={Back} alt="back-button" to="/list" /></div></Link>
        <h1  className='headertitle'>Dishes</h1>
        <ListDialog/>
      </div>
        <h1>Ingredients</h1>
        <Link to="/overview" className="bigplus"><img className="bigplusimage" src={BigPlus} alt="BigPlus"/></Link>

    </div>
  )
}
