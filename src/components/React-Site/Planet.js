import React from "react";

import Facts from "./Facts";

function Planet(props) {
  return (
    <div className="planet">
      <h2 className="planet__name">{props.planet.name}</h2>
      <p className="planet__description">{props.planet.overview.content}</p>
      <Facts fact={props.planet} />
    </div>
  );
}

export default Planet;
