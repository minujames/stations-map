import React from "react";
import { Link } from "react-router-dom";

const Header = (props) =>  
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <span className="navbar-brand">VOLTA STATIONS</span>
      </div>

      <ul className="nav navbar-nav  navbar-right">

        <li className={( window.location.pathname === `${process.env.PUBLIC_URL}/`) ? "active" : ""}>
          <Link to="/">All</Link>
        </li>

        <li className={window.location.pathname === `${process.env.PUBLIC_URL}/active` ? "active" : ""}>
          <Link to="/active">Active</Link>
        </li>

        <li className={window.location.pathname === `${process.env.PUBLIC_URL}/needs-service` ? "active" : ""}>
          <Link to="/needs-service">Needs Service</Link>
        </li>
      </ul>
    </div>
  </nav>

export default Header;



