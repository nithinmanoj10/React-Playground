import React from "react";

import "../css/style.css";

function MyPlanets() {
  return (
    <div className="planets">
      <h1 className="planets__heading">Planets in Our Solar System</h1>
      <p className="planets__info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum
        porro. Adipisci, non totam quia fuga veritatis unde voluptatem tenetur.
      </p>
      <ul className="planets__list">
        <li className="planets__list__item">Mercury</li>
        <li className="planets__list__item">Venus</li>
        <li className="planets__list__item">Earth</li>
        <li className="planets__list__item">Mars</li>
        <li className="planets__list__item">Jupiter</li>
        <li className="planets__list__item">Saturn</li>
        <li className="planets__list__item">Uranus</li>
        <li className="planets__list__item">Neptune</li>
      </ul>
    </div>
  );
}

export default MyPlanets;
