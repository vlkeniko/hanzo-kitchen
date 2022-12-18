import React from 'react'
import Back from '../pictures/back.svg'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BigPlus from '../pictures/arrow.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListMakerIngredients from './ListMakerIngredients';

export default function ListMakerDishesM(props) {

  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);

  const navigate = useNavigate();


  const showToastAdd = () => {
    toast.success('Dish was added to the preplist!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const showToastRemove = () => {
    toast.success('Dish was removed from the preplist!', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  // Add/Remove checked item from list
  const handleCheck = (event) => {

    var updatedList = [...checked];
    if (event.target.checked) {
      //The checked item is added to the updatedList
      updatedList = [...checked, event.target.value];
      //Toast if added
      showToastAdd();
    } else {
      //The un-checked item is removed to the updatedList
      updatedList.splice(checked.indexOf(event.target.value), 1);
      //Toast if removed
      showToastRemove();
    }
    setChecked(updatedList);
  }



  // Return classes based on whether item is checked
  var isChecked = (post) =>
    checked.includes(post) ? "checked-post" : "not-checked-post";

  async function handleSubmit(e) {
    e.preventDefault();
    navigate('/ingredients', {
      state: {
        dishlist: checked
      },
      params: {
        dishes: [...checked]
      }

    })
  }

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

  /*   //This thing creates an o
    function handleSubmit(e) {
      
    } */


  return (
    <>
      {/*Header*/}
      <div className='header'>
        <Link to="/lists"><div><img src={Back} alt="back-button" to="/lists" className='backbutton' /></div></Link>
        <h1 className='headertitle'>Dishes</h1>
      </div>
      {/*Header end*/}

      <form className="page" onSubmit={handleSubmit}>
        {isPosts ? (
          <div className="list-container">
            <h1 className='goldtitle'>Fridge</h1>
            {/*Display only the items that are in the fridge*/}
            {posts.map((post, index) => (
              <>
                {post.place == "fridge" ? (
                  <div className="lis" key={post.id}>
                    <section className="listitem">
                      <p className={isChecked(post.name)}>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.id} onChange={handleCheck} />
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
                {/*Display only the items that are in the freezer*/}
                {post.place == "freezer" ? (
                  <div className="lis" key={post.id}>
                    <section className="listitem">
                      <p className={isChecked(post.name)}>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.id} onChange={handleCheck} />
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
                {/*Display only the items that are in the fish fridge. Typo in database, that is why i wrote frishfridge.*/}
                {post.place == "frishfridge" ? (
                  <div className="lis" key={post.id}>
                    <section className="listitem">
                      <p className={isChecked(post.name)}>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.id} onChange={handleCheck} />
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
                  <div className="lis" key={post.id}>
                    <section className="listitem">
                      <p className={isChecked(post.name)}>{post.name}</p>
                      <label className="container">
                        <input type="checkbox" value={post.id} onChange={handleCheck} />
                        <span className="checkmark"></span>
                      </label>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}

            {/*Showing the clicked list items */}
           

         
          </div>

        ) : (
          <p>Nothing to show</p>
        )}
        <button className="submitbutton" ><img src={BigPlus} alt="BigPlus" className="bigplusimage" /></button>
      </form>
    </>

  );

}
