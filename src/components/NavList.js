import React from "react";

import "../css/style.css";

function NavList() {
  return (
    <ul className="nav__list">
      <li className="nav__list__item">
        <a href="javascript:void(0)" className="nav__list__item__link">
          Galaxies
        </a>
      </li>
      <li className="nav__list__item">
        <a href="javascript:void(0)" className="nav__list__item__link">
          Stars
        </a>
      </li>
      <li className="nav__list__item">
        <a href="javascript:void(0)" className="nav__list__item__link">
          Login
        </a>
      </li>
      <li className="nav__list__item">
        <a href="javascript:void(0)" className="nav__list__item__link">
          Sign Up
        </a>
      </li>
    </ul>
  );
}

export default NavList;
