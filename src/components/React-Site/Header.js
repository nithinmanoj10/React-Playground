import React from "react";

import NavList from "./NavList";
import "../../css/style.css";

function Header() {
  return (
    <header>
      <nav className="nav">
        <h1>Planets in Our Solar System</h1>
        <NavList />
      </nav>
    </header>
  );
}

export default Header;
