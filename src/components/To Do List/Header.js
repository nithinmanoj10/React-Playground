import React from "react";
import "../../css/style.css";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h4 className="day">Today</h4>
        <p className="date">January 28</p>
        <a href="javascript:void(0)" className="search">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            className="search-icon"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
