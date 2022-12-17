import React from 'react'
import Back from '../pictures/back.svg'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BigPlus from '../pictures/arrow.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pdf from "react-to-pdf";

export default function ListMakerDishesM() {

  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const [checked, setChecked] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [usermessage, setMessage] = useState("");
  const ref = React.createRef();

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

  function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
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

  // Generate string of checked items
  const checkedPosts = checked.length
    ? checked.reduce((total, post) => {
      return total + ", " + JSON.parse(post).name;
    })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (post) =>
    checked.includes(post) ? "checked-post" : "not-checked-post";

  async function handleSubmit(e) {
    e.preventDefault();
    navigate('/ingredients', {
      state: {
        dishlist: checked
      }

    })


 e.preventDefault();
    const formData = {
      dishlist: JSON.stringify(location.state.dishlist, 2)
    }
    const url = "https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/SavedPrep.json";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData, 2),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
    });

    const data = await response.json();
    console.log(data);


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

      <form className="page" onSubmit={handleSubmit}>
          <h1 className='title'>Ingredients</h1>
          {isPosts ? (
            <div className='exportdoc' ref={ref}>
             <p className='listitem'> Items checked are: {checkedPosts} </p>
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
    </>

  );

}
