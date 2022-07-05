import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "nav-link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "nav-link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "nav-link")}
          to="/projects/list"
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav