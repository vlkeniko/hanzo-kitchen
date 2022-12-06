import React from 'react'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom';
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig"

export default function Overview() {
  return (
    <div>
      <div className='header'>
      <Link className='backbutton' to="/ingredients"><div><img src={Back} alt="back-button"/></div></Link>
        <h1  className='headertitle'>Overview</h1>
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
