import React from 'react'
import Back from '../pictures/back.svg'
import { useState, useEffect } from "react";
import { endpoint, getFromEndpoint } from "../utils/database_functions.js";
import ComponentCard from "../components/ComponentCard";
import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import BigPlus from '../pictures/BigPlus.svg'


export default function ListMakerComponents() {

  const [components1, setComponents1] = useState([]);
  /* Getting items data from our endpoint */
  async function getComponents1() {
    const url = `${endpoint}/ColdSection/Dishes/Fridge.json`;
    let result = await getFromEndpoint(url);
    setComponents1(result);
  }

  useEffect(() => {
    getComponents1();
  }, []);


  const [components2, setComponents2] = useState([]);
  /* Getting items data from our endpoint */
  async function getComponents2() {
    const url = `${endpoint}/ColdSection/Dishes/Freezer.json`;
    let result = await getFromEndpoint(url);
    setComponents2(result);
  }

  useEffect(() => {
    getComponents2();
  }, []);

  const [components3, setComponents3] = useState([]);
  /* Getting items data from our endpoint */
  async function getComponents3() {
    const url = `${endpoint}/ColdSection/Dishes/Fish fridge.json`;
    let result = await getFromEndpoint(url);
    setComponents3(result);
  }

  useEffect(() => {
    getComponents3();
  }, []);

  const [components4, setComponents4] = useState([]);
  /* Getting items data from our endpoint */
  async function getComponents4() {
    const url = `${endpoint}/ColdSection/Dishes/Basement.json`;
    let result = await getFromEndpoint(url);
    setComponents4(result);
  }

  useEffect(() => {
    getComponents4();
  }, []);

  return (
    <div>
      {/*Header*/}
      <div className='header'>
        <Link to="/list"><div><img src={Back} alt="back-button" navigate="/list" className='backbutton' /></div></Link>
        <h1 className='headertitle'>Dishes</h1>
        <ListDialog />
      </div>
      {/*Header end*/}

      {/*Showing the dishes from the database*/}
      <div className='list-container'>
        <div>Fridge</div>
        {components1.map((component1, i) => {
          return (
            <ComponentCard
              key={component1.id}
              componentname={component1.name}
            />
          );
        })}
      </div>


      <div className='list-container'>
        <div>Freezer</div>
        {components2.map((component2, i) => {
          return (
            <ComponentCard
              key={component2.id}
              componentname={component2.name}
            />
          );
        })}
      </div>

      <div className='list-container'>
        <div>Fish Fridge</div>
        {components3.map((component3, i) => {
          return (
            <ComponentCard
              key={component3.id}
              componentname={component3.name}
            />
          );
        })}
      </div>

      <div className='list-container'>
        <div>Basement</div>
        {components4.map((component4, i) => {
          return (
            <ComponentCard
              key={component4.id}
              componentname={component4.name}
            />
          );
        })}
      </div>
      <Link to="/ingredients"><img src={BigPlus} alt="BigPlus" className="bigplusimage" /></Link>
    </div>


  )
}
