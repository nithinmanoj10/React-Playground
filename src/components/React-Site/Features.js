import React from "react";

import FeaturesBox from "./FeaturesBox";
import featuresData from "./FeaturesData";

function Features() {
  const featuresJSX = featuresData.map(function (item) {
    return <FeaturesBox key={item.id} feature={item} />;
  });

  return <div className="features">{featuresJSX}</div>;
}

export default Features;
