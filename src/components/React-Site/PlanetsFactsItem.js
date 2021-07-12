import React from "react";

function PlanetsFactsItem(props) {
  console.log(props);
  return (
    <div className="planet__facts__item">
      <h4 className="planet__facts__item__name">{props.name}</h4>
      <p className="planet__facts__item__value">{props.fact}</p>
    </div>
  );
}

export default PlanetsFactsItem;
