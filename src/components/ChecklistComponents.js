import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import Back from '../pictures/back.svg'
import BigPlus from '../pictures/BigPlus.svg'
export default function ChecklistComponents() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee", "Apple", "Banana", "Tea",
  "Apple"];



  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
      return total + ", " + item;

    })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item"  : "not-checked-item";

  var isChecked =(item) =>
  checked.includes(item) ? localStorage.setItem('che', JSON.stringify(item)) : "";
 

  return (
    <div className="app">

      {/*Header*/}
      <div className='header'>
        <Link className='backbutton' to="/list"><img src={Back} alt="back-button" to="/list" /></Link>
        <h1  className='headertitle'>Dishes</h1>
        <ListDialog />
      </div>

      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div className="listitem" key={index}>
              <span className={isChecked(item)}>{item}</span>
              <input  value={item} type="checkbox" onChange={handleCheck} />
              
            </div>
          ))}
        </div>
      </div>

      <div>
        {`Items checked are: ${checkedItems}`}
      </div>

      <Link to="/ingredients" className="bigplus"><img src={BigPlus} alt="BigPlus" className="bigplusimage"/></Link>
    </div>
  );
}