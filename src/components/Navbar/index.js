import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return(
    <nav className="navbar navbar-expand-md navbar-light bg-light" style={{padding: 0}} id="bignav">  
    <div className="container tc">
      <Link className="navbar-brand" to="#" >Kin-Wai Lam</Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactMe">Contact Me</Link>
          </li>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;