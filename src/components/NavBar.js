import React from 'react';
import logo from '../image/logo.png.jpg'
//React font Aswome imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="hello" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <FontAwesomeIcon icon ={faBars} style={{color:"white"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#">How Work</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="#">Protofolio</a>
        </li>
       
      </ul>
     
    </div>
  </div>
  </div>
</nav>

    );
};

export default NavBar;