import React from "react";

import "../../css/style.css";
import Planet from "./Planet";
import planetData from "./data";

function MyPlanets() {
  console.log(planetData);

  const planetJSX = planetData.map(function (planet) {
    return <Planet key={planet.id} planet={planet} />;
  });

  console.log(planetJSX);

  return (
    <div className="planets">
      <h1 className="planets__heading">Meet the Planets</h1>
      <p className="planets__info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum
        porro. Adipisci, non totam quia fuga veritatis unde voluptatem tenetur.
      </p>
      <div className="planets__grid">{planetJSX}</div>
    </div>
  );
}

export default MyPlanets;
