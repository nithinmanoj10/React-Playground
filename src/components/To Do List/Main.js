import React from "react";
import "../../css/style.css";

import TodoItem from "./TodoItem";

function Main() {
  return (
    <div className="main">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default Main;
