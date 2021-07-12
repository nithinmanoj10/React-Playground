import React from "react";

function FeaturesBox() {
  return (
    <div className="features__box">
      <h2 className="features__box__title">Declarative</h2>
      <p className="features__box__description">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </p>
      <p className="features__box__description">
        Declarative views make your code more predictable and easier to debug.
      </p>
    </div>
  );
}

export default FeaturesBox;
