import React from "react";
import "./Navbar.css";
import navbar__logo from "../../assets/Logo.png";
import HEADER__INFO from "../../static/static";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="site-header">
      <div className="site-header-container container">
        {/* SITE-HEADER-LOGO */}
        <Link to={"/"} className="site-header-logo-link">
          <h1>Logo</h1>
        </Link>
        {/* SITE-HEADER-NAV */}
        <div className="site-header-sitenav-wrapper">
          <nav className="site-header-sitenav">
            <ul className="site-header-sitenav-list">
              <Link to={"/"} className="site-header-sitnav-link">
                Home
              </Link>
              <Link className="site-header-sitnav-link">About</Link>
              <Link to={"Form"} className="site-header-sitnav-link">
                Form
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
