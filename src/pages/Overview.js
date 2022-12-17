import React from 'react'
import Back from '../pictures/back.svg'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";
import SimpleDialogDemo from '../components/ListDialog';



export default function Overview() {

  const showToastSave = () => {
    toast.success('List saved.', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [usermessage, setMessage] = useState("");
  const [username, setName] = useState("");
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const navigate = useNavigate();
  const ref = React.createRef();

  useEffect(() => {
    async function getPosts() {
      if (location.state.ingredientslist.length > 0) {
        setPosts(location.state.ingredientslist);
        sessionStorage.setItem("ingredientslist", JSON.stringify(location.state.ingredientslist))
      } else {
        setIsPosts(false);
      }
    }
    getPosts();
  }, []);


//To get the current date in the right format
function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }


  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: username,
      message: usermessage,
      ingredientslist: location.state.ingredientslist,
      date: getCurrentDate()
      
    }
    const url = "https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/Savedlists.json";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData, null, 2),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    navigate("/lists");
    showToastSave();
  }

  return (
    <div>
      {/*Header*/}
      <div className='header'>
        <Link className='backbutton' to="/ingredients" ><div><img src={Back} alt="back-button" navigate="/ingredients"/></div></Link>
        <h1 className='headertitle'>Overview</h1>
        <SimpleDialogDemo></SimpleDialogDemo>
      </div>
      {/*Header end*/}
      
      <div className='exportdoc' >
        <form className="page" onSubmit={handleSubmit}>
          <h1 className='title'>Ingredients</h1>
          {isPosts ? (
            <div className='exportdoc' ref={ref}>
              {posts.map((post, index) => (
                <div className="exportlistitemlist" key={index} >
                  <p className='exportlistitem'>{post}</p>
                </div>
              ))}
              <div className='exportform'>
                <label className='exportformlabel'>Comment</label>
                <textarea placeholder="Write message" onChange={e => setMessage(e.target.value)} className='exportformcommentfield'></textarea>
                <label className='exportformlabel'>Name</label>
                <input type="text" placeholder="type in your name" onChange={e => setName(e.target.value)} className='exportformnamefield' required></input>
                <div className='submitbuttons'>
                  {/*Save  lists with todays date*/}
                  <Pdf targetRef={ref} filename={getCurrentDate()}>
                    {({ toPdf }) => <button className="sendconvertbutton" onClick={toPdf}>Save PDF</button>}
                  </Pdf>
                  <button className='exportformsubmit'>Save list</button>
                </div>
              </div>
            </div>

          ) : (
            <p className='exportlistitem'>Nothing to show</p>

          )}

        </form>
      </div>
    </div>
  )
}
