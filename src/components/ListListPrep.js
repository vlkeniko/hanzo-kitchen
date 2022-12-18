import React from 'react'
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function ListListPrep() {

  const [posts, setPosts] = useState([]);
  const [setIsPosts] = useState(true); // isP

  useEffect(() => {
    async function getPosts() {
      const url = `https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app/Preplist.json`;
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
  

  return (
    <div key="post">
      {/* <div className='nolist'><p>No order list has been made today.</p></div> */}
      <div className='lists-container' >
        {posts.map((post, index) => (
          <>
            <div className='accordion'>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="date" key="post.date">{post.date}</p>
                  <p className="name"key="post.name"> - {post.name}</p><br />
                </AccordionSummary>
                <AccordionDetails>
                  <p className="comment" key="post.message">{post.message}</p><br />
                  <p className="postlist"> {post.disheslist.map((disheslist) => <li className="postlistitem"  key="post.disheslist" >{disheslist}</li>)}</p>
                </AccordionDetails>
              </Accordion>
            </div>
          </>
        ))}
      </div>


    </div>
  )
}
