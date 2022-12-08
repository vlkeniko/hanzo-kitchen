import React from "react";
import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import Back from '../pictures/back.svg';
import BigPlus from '../pictures/BigPlus.svg';
import { useEffect, useState } from "react";
import { endpoint } from "../utils/database_functions.js";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResultPage(props) {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  
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


async function getData(dish) {
  // const url = `${endpoint}/ColdSection/Dishes/Basement/${dish}/ingredients.json`;
const url = `https://dishes-c89c9-default-rtdb.europe-west1.firebasedatabase.app/dishes/${dish}/ingredients.json`;
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

  return (
    <>
     {/*Header*/}
   <div className='header'>
   <Link to="/dishes"><div><img src={Back} alt="back-button" to="/dishes"  className='backbutton'/></div></Link>
   <h1  className='headertitle'>Dishes</h1>
   <ListDialog/>
 </div>
    <form className="page" onSubmit={handleSubmit}>

      {isPosts ? (
        <div className="list-container">
          {posts.map((post, index) => (
            <div key={index}> 
        
            <section className="listitem">
            {/*   <div className="english">
            
                <p>{post.id}</p>
              </div> */}
                <p>{post.name}</p>
                  <input type="checkbox" value={post.name} onChange={handleCheck} />
              </section>
          </div>
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
      <button className="submitbutton" ><img src={BigPlus} alt="BigPlus" className="bigplusimage"/></button>
    </form>
    </>
    
        
  );
}
