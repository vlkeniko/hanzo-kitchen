import React from "react";
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
import Back from '../pictures/back.svg';
import BigPlus from '../pictures/arrow.svg';
import { useEffect, useState } from "react";
// import { endpoint } from "../utils/database_functions.js";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ListMakerIngredients(props) {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);
  const [usermessage, setMessage] = useState("");
  const [username, setName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const ref = React.createRef();
  // const updatedList= useState([]);

  async function getData(dish) {
    // const url = `${endpoint}/ColdSection/Dishes/Basement/${dish}/ingredients.json`;
    const url = `https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/dishes/${dish}/ingredients.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  // Add/Remove checked item from list  
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      toastAdd();
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
      toastRemove();
    }
    setChecked(updatedList);
    // Setting user data to localStorage

  };

  function getCurrentDate(separator = '/') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
  }



  useEffect(() => {
    async function getPosts() {
      // let postsArray = [];
      let database = [];
      let data;

      for (const dish of location.state.dishlist) {
        data = await getData(dish);
        database.push(...data);
      }

      if (data !== null) {
        /*postsArray = Object.keys(database).map((key) => ({
          id: key,
          ...data[key],
        })); */
        setPosts(database); // Update "posts" object array list. Set posts equal to postsArray
      } else {
        setIsPosts(false); // If no data is found, set isPosts to "false". "Noting to show" message is shown.
      }
    }
    getPosts();
  }, []);




  const toastAdd = () => {
    toast.success('Ingredient was added to the orderlist', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const toastRemove = () => {
    toast.success('Ingredient was added to the orderlist', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const showToastSave = () => {
    toast.success('List saved.', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  async function handleSubmitSend(e) {
    e.preventDefault();
    const formDataSend = {
      name: username,
      message: usermessage,
      disheslist: location.state.dishlist,
      date: getCurrentDate()

    }
    const url = "https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/Preplist.json";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formDataSend, null, 2),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    showToastSave();
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/overview', {
      state: {
        ingredientslist: checked
      }
    })
  }

  return (
    <>
      {/*Header*/}
      <div className='header'>
        <Link to="/dishes"><div><img src={Back} alt="back-button" navigate="/dishes" className='backbutton' /></div></Link>
        <h1 className='headertitle'>Ingredients</h1>
      </div>
      {/*Header end*/}

      
      <form className="page" onSubmit={handleSubmitSend}>
       
        {isPosts ? (
          <div className='exportdoc' ref={ref}>
             <h1 className="exporttitle">Prep list</h1>
             <p className="dates">{getCurrentDate()}</p>
            {posts.map((post, index) => (
              <div className="exportlistitemlist" key={index} >
                <p className='exportlistitem'>{props.dishes}</p>
              </div>
            ))}
            <div className='exportform'>
              <label className='exportformlabel'>Comment</label>
              <textarea placeholder="Write message" onChange={e => setMessage(e.target.value)} className='exportformcommentfield'></textarea>
              <label className='exportformlabel'>Name</label>
              <input type="text" placeholder="type in your name" onChange={e => setName(e.target.value)} className='exportformnamefield' required></input>
              <div className='submitbuttons'>
                {/*Save  lists with todays date*/}
                <button className='exportformsubmit'>Save list</button>
              </div>
            </div>
          </div>

        ) : (
          <p className='exportlistitem'>Nothing to show</p>
        )}

      </form>

      <form className="page" onSubmit={handleSubmit}>
        {isPosts ? (
          <div className="list-container">
            <h1 className='goldtitle'>Basement</h1>
            {posts.map((post, index) => (
              <>
                {post.place == "basement" ? (
                  <div key={index}>
                    <section className="listitem">

                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.name} onChange={handleCheck} />
                        <span className="checkmark"></span>
                      </label>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>

            ))}
            <h1 className='goldtitle'>Fridge</h1>
            {posts.map((post, index) => (
              <>
                {post.place == "fridge" ? (
                  <div key={index}>
                    <section className="listitem">

                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.name} onChange={handleCheck} />
                        <span className="checkmark"></span>
                      </label>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>

            ))}
            <h1 className='goldtitle'>Freezer</h1>
            {posts.map((post, index) => (
              <>
                {post.place == "freezer" ? (
                  <div key={index}>
                    <section className="listitem">

                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.name} onChange={handleCheck} />
                        <span className="checkmark"></span>
                      </label>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
            <h1 className='goldtitle'>Fish fridge</h1>
            {posts.map((post, index) => (
              <>
                {post.place == "fish fridge" ? (
                  <div key={index}>
                    <section className="listitem">

                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.name} onChange={handleCheck} />
                        <span className="checkmark"></span>
                      </label>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}


          </div>
        ) : (
          <p>Nothing to show</p>
        )}
        <button className="submitbutton" ><img src={BigPlus} alt="BigPlus" className="bigplusimage" /></button>
      </form>

    </>


  );
}
