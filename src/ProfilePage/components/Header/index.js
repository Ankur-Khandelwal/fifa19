import React from 'react';
import { Link } from "react-router-dom";

import './style.css';

function Header(props) {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/"><span>Home</span></Link>
        <span>Help</span>
      </div>
      <div className="playerNamePic">
        <span>{props.name}</span>
        &nbsp;
        <img src="https://i.ibb.co/g4HN90T/Untitled-design-1.png" alt="playerpic"/>
      </div>
    </div>
  );
}

export default Header;
