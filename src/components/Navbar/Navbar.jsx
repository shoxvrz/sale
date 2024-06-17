import React from "react";
import "./Navbar.scss";
import { navRoutes } from "../../routes/NavRoutes";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1 className="logo">FASCO</h1>
      </div>
      <div className="navbar__right">
        <ul>
          {navRoutes &&
            navRoutes.map((nav, i) => <li key={i}>{nav.name}</li>)}
        </ul>
        <div className="navbar__right--login">
          <button className="loginBtn">Log In</button>
          <button className="signBtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
