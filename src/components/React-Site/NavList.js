import React from "react";

import NavListItem from "./NavListItem";
import "../../css/style.css";

function NavList() {
  return (
    <ul className="nav__list">
      <NavListItem
        item={{
          name: "Galaxies",
        }}
      />
      <NavListItem
        item={{
          name: "Stars",
        }}
      />
      <NavListItem
        item={{
          name: "Login",
        }}
      />
      <NavListItem
        item={{
          name: "Sign Up",
        }}
      />
    </ul>
  );
}

export default NavList;
