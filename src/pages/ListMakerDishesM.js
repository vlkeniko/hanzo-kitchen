import React from 'react'
import Back from '../pictures/back.svg'
import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import ListDialog from '../components/ListDialog';
import BigPlus from '../pictures/arrow.svg'
import { useNavigate } from 'react-router-dom';


export default function ListMakerDishesM() {
  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);
  const updatedList = useState([]);
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
    // console.log(updatedList);
    // Setting user data to localStorage
    localStorage.setItem("updatedList", JSON.stringify(updatedList));
  };




  useEffect(() => {
    async function getPosts() {
      const url = `https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/dishes.json`;
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


  //This thing creates an o
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
        <Link to="/list"><div><img src={Back} alt="back-button" to="/list" className='backbutton' /></div></Link>
        <h1 className='headertitle'>Dishes</h1>
        <ListDialog />
      </div>

      <form className="page" onSubmit={handleSubmit}>
        {isPosts ? (
          <div className="list-container">


            <h1 className='goldtitle'>Fridge</h1>
            {posts.map((post, index) => (
              <>

                {post.place == "fridge" ? (
                  <div className="lis" key={post.place}>
                    <section className="listitem">
                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={index} onChange={handleCheck} />
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
            <p className='nolist'>Dont forget to defrost ingredients for tomorrow!</p>
            {posts.map((post, index) => (
              <>

                {post.place == "freezer" ? (
                  <div className="lis" key={post.place}>
                    <section className="listitem">
                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={index} onChange={handleCheck} />
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

                {post.place == "frishfridge" ? (
                  <div className="lis" key={post.place}>
                    <section className="listitem">
                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={index} onChange={handleCheck} />
                        <span className="checkmark"></span>
                      </label>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}

            <h1 className='goldtitle'>Basement</h1>
            {posts.map((post, index) => (
              <>

                {post.place == "basement" ? (
                  <div className="lis" key={post.place}>
                    <section className="listitem">
                      <p>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={index} onChange={handleCheck} />
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
