import React from 'react'
import Back from '../pictures/back.svg'
import { Form, Link } from 'react-router-dom';
/* import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig"
 */


import Pdf from "react-to-pdf";
import Input from '../components/form';

const ref = React.createRef();


export default function Overview() {
  return (
    <div>
      <div className='header'>
        <Link className='backbutton' to="/ingredients"><div><img src={Back} alt="back-button" /></div></Link>
        <h1 className='headertitle'>Overview</h1>
      </div>
      <div className='exportdoc' ref={ref}>
        <ul className='exportlist'>
          <li className='exportlistitem'>List item</li>
          <li className='exportlistitem'>List item</li>
          <li className='exportlistitem'>List item</li>
          <li className='exportlistitem'>List item</li>
          <li className='exportlistitem'>List item</li>
        </ul>

        <form className='exportforms'>
          <div className='exportform'>
            
            <label className='exportformlabel'>
              Comment
              <textarea type="text" name="comment" className='exportformcommentfield' />
            </label>
            </div>
          <div className='exportform'>
            <label className='exportformlabel'>
              Name
              <input type="text" name="name" className='exportformnamefield' required/>
            </label>
            <input type="submit" value="Submit" className='exportformsubmit' /></div>
        </form>
      </div>
      <Pdf  targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="sendconvertbutton" onClick={toPdf}>Send PDF</button>}
      </Pdf>
<Input/>
    </div>
  )
}
