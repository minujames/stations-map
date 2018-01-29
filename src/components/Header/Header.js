import React from "react";
import { Link } from "react-router-dom";

const Header = (props) =>  
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <span className="navbar-brand">VOLTA STATIONS</span>
      </div>

      <ul className="nav navbar-nav  navbar-right">

        <li className={window.location.pathname === "/stations/all" ? "active" : ""}>
          <Link to="/stations/all">All</Link>
        </li>

        <li className={window.location.pathname === "/stations/active" ? "active" : ""}>
          <Link to="/stations/active">Active</Link>
        </li>

        <li className={window.location.pathname === "/stations/needs_service" ? "active" : ""}>
          <Link to="/stations/needs_service">Needs Service</Link>
        </li>

        <li className={window.location.pathname === "/stations/under_construction" ? "active" : ""}>
          <Link to="/stations/under_construction">Under Construction</Link>
        </li>
      </ul>
    </div>
  </nav>

export default Header;



