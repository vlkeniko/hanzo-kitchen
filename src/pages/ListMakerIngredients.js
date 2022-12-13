import React from "react";
import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import Back from '../pictures/back.svg';
import BigPlus from '../pictures/arrow.svg';
import { useEffect, useState } from "react";
// import { endpoint } from "../utils/database_functions.js";
import { useNavigate, useLocation } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ListMakerIngredients(props) {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const updatedList= useState([]);

  // Add/Remove checked item from list  
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
        // Setting user data to localStorage
        localStorage.setItem("updatedListIngredients", JSON.stringify(updatedList));
  };


  async function getData(dish) {
    // const url = `${endpoint}/ColdSection/Dishes/Basement/${dish}/ingredients.json`;
    const url = `https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/dishes/${dish}/ingredients.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
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


  function handleSubmit(e) {
    e.preventDefault();
    navigate('/overview', {
      state: {
        ingredientslist: checked
      }
    })
  }

  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
  }

  return (
    <>
      {/*Header*/}
      <div className='header'>
        <Link to="/dishes"><div><img src={Back} alt="back-button" navigate="/dishes"  className='backbutton' /></div></Link>
        <h1 className='headertitle'>Ingredients</h1>
        <ListDialog list={updatedList}/>
      </div>
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
