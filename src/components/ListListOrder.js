import React from 'react'
import { useState, useEffect } from 'react';
import ListComponent from './ListComponent';

export default function ListListOrder() {

  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isP

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


  return (

    <div>
      <h1>Order lists</h1>
      <h3>Today</h3>
      <div className='nolist'><p>No order list has been made today.</p></div>
      <h3>This week</h3>
      <div className='lists-container'>
        {posts.map((post, index) => (
          <>
            <div className="listscard" key={post.id}>
              <p>Made by: {post.name}</p><br/>
              <p>Comment: {post.message}</p><br/>
              <ListComponent orderlist={post.ingredientslist}/>
            </div>
          </>
        ))}
      </div>


    </div>
  )
}
