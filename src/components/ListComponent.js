import React from 'react'

export default function ListComponent(props) {

  var posts = props.ingredientslist;

  return (
    posts.map((post, index) => (
      <div className="exportlistitemlist" key={index} >
        <p className='exportlistitem'>{post.ingredientslist}</p>
      </div>
    ))



  )
}
