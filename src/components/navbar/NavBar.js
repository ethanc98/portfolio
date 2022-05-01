import React, { useState } from "react";
import { Link } from "react-scroll";

import "./NavBar.css";

function NavBar() {

  const [click, setClick] = useState(false);

  return (
    <header className="header">
      <ul className="nav">
    {/* <li className="nav__item"> */}
        <li className={click ? "nav__item active" : "nav__item"}>
          <Link
            to="home_shadow"
            offset={0}
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        {/* <li className="nav__item"> */}
        <li className={click ? "nav__item active" : "nav__item"}>
          <Link
            to="about_shadow"
            offset={0}
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        {/* <li className="nav__item"> */}
        <li className={click ? "nav__item active" : "nav__item"}>
          <Link
            to="projects_shadow"
            offset={0}
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        {/* <li className="nav__item"> */}
        <li className={click ? "nav__item active" : "nav__item"}>
          <Link
            to="contact_shadow"
            offset={0}
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>

    
  );
}

export default NavBar;
