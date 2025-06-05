import React from "react";
// import "../assets/stylesheets/style.css";
import "boxicons/css/boxicons.min.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="active">
    <Link to="/" className="logo">
      shafiyeva.
    </Link>
    <i className="bx bx-menu" id="menu-icon"></i>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
