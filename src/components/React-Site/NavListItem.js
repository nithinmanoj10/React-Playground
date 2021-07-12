import React from "react";
import "../../css/style.css";

function NavListItem(props) {
  return (
    <li className="nav__list__item">
      <a href="javascript:void(0)" className="nav__list__item__link">
        {props.item.name}
      </a>
    </li>
  );
}

export default NavListItem;
