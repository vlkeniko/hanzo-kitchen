import React from 'react'
import Back from '../pictures/back.svg'
import { useState, useEffect } from "react";
import { endpoint, getFromEndpoint } from "../utils/database_functions.js";
import ComponentCard from "../components/ComponentCard";
import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import BigPlus from '../pictures/BigPlus.svg'
import { useNavigate } from 'react-router-dom';

export default function ListMakerDishesM() {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();
  
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

  useEffect(() => {
    async function getPosts() {
      const url = `${endpoint}/ColdSection/Dishes/Basement.json`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data !== null) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray); // Update "posts" object array list. Set posts equal to postsArray
      } else {
        setIsPosts(false); // If no data is found, set isPosts to "false". "Noting to show" message is shown.
      }
    }
    getPosts();
  }, []);

 function handleSubmit(e) {
    e.preventDefault();
    navigate('/ingredients', {
        state: {
            dishlist: checked
        }
    })
 }

  return (
  <>
   {/*Header*/}
   <div className='header'>
          <Link to="/list"><div><img src={Back} alt="back-button" to="/list"  className='backbutton'/></div></Link>
          <h1  className='headertitle'>Dishes</h1>
          <ListDialog/>
        </div>

    <form className="page" onSubmit={handleSubmit}>
      <h1>Dishes</h1>


      {isPosts ? (
        <div className="flexbox">
          {posts.map((post, index) => (
            <div className="card_container" key={post.id}> 
            <span className="ident">{post.place}</span>
            <section className="card">
              <div className="english">
                <p>[Id]</p>
                <p>{post.id}</p>
              </div>
              <div>&rarr;</div>
              <div className="danish">
                <p>[Dish]</p>
                <p>{post.name}</p>
              </div>
              <div>
                  <input type="checkbox" value={index} onChange={handleCheck} ></input>
              </div>
              </section>
          </div>
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
      <button><img src={BigPlus} alt="BigPlus" className="bigplusimage"/></button>
    </form>
  </>
         
  );
 
}
