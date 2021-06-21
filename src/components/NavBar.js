import React from "react";
import "../css/Theme.css";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeLink = {
    textDecoration: "none",
    color: "var(--text-color)",
  };
  return (
    <nav className="NavBar fixed-top">
      <NavLink
        className="Nav-Link navbar-brand"
        exact
        to="/"
        title="Dr.Ashok Kumar"
        activeStyle={activeLink}
      >
        Dr.Ashok Kumar
      </NavLink>
      <NavLink
        className="Nav-Link"
        aria-current="page"
        exact
        to="/publications"
        title="Publications"
        activeStyle={activeLink}
      >
        Publications
      </NavLink>
    </nav>
  );
}
