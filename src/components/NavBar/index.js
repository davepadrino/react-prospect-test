import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'

const NavBar = props => 
  <div className="app">
      <header className="app-header">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors Page</Link>
          <Link to="/services">Services Page</Link>
          <Link to="/packages">Packages Page</Link>
        </ul>
      </header>
      {props.children}
    </div>

export default NavBar;
