import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink to="/Doritos">Doritos</NavLink> <br></br>
      <NavLink to="/Funyuns">Funyuns</NavLink> <br></br>
      <NavLink to="/HotCheetos">HotCheetos</NavLink> <br></br>
    </nav>
  );
}

export default NavBar;