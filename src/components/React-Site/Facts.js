import React from "react";

import PlanetsFactsItem from "./PlanetsFactsItem";

function Facts(props) {
  return (
    <div className="planet__facts">
      <PlanetsFactsItem name="Rotation" fact={props.fact.rotation} />
      <PlanetsFactsItem name="Revolution" fact={props.fact.revolution} />
      <PlanetsFactsItem name="Radius" fact={props.fact.radius} />
      <PlanetsFactsItem name="Temperature" fact={props.fact.temperature} />
    </div>
  );
}

export default Facts;
