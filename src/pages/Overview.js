import React from 'react'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom';
/* import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig"
 */


import Pdf from "react-to-pdf";

const ref = React.createRef();


export default function Overview() {
  return (
    <div>
      <div className='header'>
        <Link className='backbutton' to="/ingredients"><div><img src={Back} alt="back-button" /></div></Link>
        <h1 className='headertitle'>Overview</h1>
      </div>
      <div ref={ref}>
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

        <br />

        <form>
          <label>
            Name:
            <input type="text" name="comment" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>





      <button type="submit">Upload</button>
    </div>
  )
}
