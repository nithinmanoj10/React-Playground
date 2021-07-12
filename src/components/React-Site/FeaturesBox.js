import React from "react";

function FeaturesBox(props) {
  return (
    <div className="features__box">
      <h2 className="features__box__title">{props.feature.heading}</h2>
      <p className="features__box__description">{props.feature.para1}</p>
      <p className="features__box__description">{props.feature.para2}</p>
    </div>
  );
}

export default FeaturesBox;
