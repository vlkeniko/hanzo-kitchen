import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="all-nav">
   
   
        <div className="navlink-container">
          <Link className="navlink list" to="/list">List</Link>
        </div>

        <div className="navlink-container">
          <Link className="navlink allergies" to="/allergies">Allergies</Link>
        </div>

        <div className="navlink-container">
          <Link className="navlink closing" to="/closing">Closing</Link>
        </div>

        <div className='navlink-container'>
          <Link className="navlink home" end to="/">Home</Link>
        </div>

    
    </div>
  )
}
