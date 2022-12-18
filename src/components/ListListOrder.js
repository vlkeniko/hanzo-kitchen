import React from 'react'
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function ListListOrder() {

  const [posts, setPosts] = useState([]);
  const [setIsPosts] = useState(true); // isP

  useEffect(() => {
    async function getPosts() {
      const url = `https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/Savedlists.json`;
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

  //To get the current date in the right format
  /* function getCurrentDate(separator='/'){
  
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    } */

  return (
    <div>
      {/* <div className='nolist'><p>No order list has been made today.</p></div> */}
      <div className='lists-container'>
        {posts.map((post, index) => (
          <>
            <div className='accordion'>
              <Accordion style={{ zIndex: "0" }}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="date" key="date">{post.date}</p>
                  <p className="name" key="name"> - {post.name}</p><br />
                  {/* <Delete data={post}/> */}
                </AccordionSummary>
                <AccordionDetails>
                  <p className="comment" key="message" >{post.message}</p><br />
                  <p className="postlist" > {post.ingredientslist.map((ingredientslist) => <li className="postlistitem" key="ingredientslist">{ingredientslist}</li>)}</p>
                </AccordionDetails>
              </Accordion>
            </div>
          </>
        ))}
      </div>


    </div>
  )
}