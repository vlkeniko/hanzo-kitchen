import React from 'react';
import NavLink from 'react-router-dom'

export default function nav() {
  return (
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink list" end to="/list"></NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink allergies" to="/allergies"></NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink closing" to="/closing"></NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink finances" to="/dorm8ts.build/finances"></NavLink>
        </div>

        {/*Profile is not a navlink here, it is a component because it doesnt display on all pages */}
      </nav>
    </div>
  )
}
