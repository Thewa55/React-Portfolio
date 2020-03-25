import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";


{/* <a className="navbar-brand" href="#" style="font-size: 30px; background-color: teal;color:white; padding-left: 20px; padding-right: 20px;">Kin-Wai Lam</a> */}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return(
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
  );
}

export default Navbar;