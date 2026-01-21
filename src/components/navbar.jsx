import React, { useState } from "react";
import "../App.css";
import logo from "../assets/images/logo/logo.jpg";
import { Link } from "react-router-dom";

function Navbar({ savedCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand">Cook-Meal</span>
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipe">Recipes</Link>
        </li>
        <li>
          <Link to="/saved">
            Saved {savedCount > 0 && <span className="count-badge">{savedCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
