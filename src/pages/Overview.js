import React from 'react'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom';



export default function Overview() {
  return (
    <div>
      <div className='header'>
        <img src={Back} alt="back-button" to="/ingredients" />
        <h1>Overview</h1>
      </div>

      <div>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
        <p>List item</p>
      </div>

      <form>
  <label>
   Comment
    <input type="text" name="comment" />
  </label>
  <input type="submit" value="Submit" />
</form>

<br/>

<form>
  <label>
   Name:
    <input type="text" name="comment" />
  </label>
  <input type="submit" value="Submit" />
</form>


      <Link to="/overview">Upload</Link>
    </div>
  )
}
