import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Button from "./components/Number Counter/Button";
import "./css/style.css";

function App() {
  const [count, setCount] = useState(0);
  const [fontsize, setfontsize] = useState(20);

  useEffect(() => {
    setfontsize((prevfontsize) => prevfontsize + 10);
  }, [count]);

  const decrement = function () {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: fontsize }}>{count}</h1>
      <Button decrement={decrement} text="Decrease" />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
