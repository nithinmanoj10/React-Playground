import React from "react";
import "../../css/style.css";

import TodoItem from "./TodoItem";

function Main() {
  return (
    <div className="main">
      <TodoItem
        todo={{
          name: "Laundry",
          time: "08:00 AM",
        }}
      />
      <TodoItem
        todo={{
          name: "Lunch",
          time: "02:00 PM",
        }}
      />
      <TodoItem
        todo={{
          name: "Workout",
          time: "05:00 PM",
        }}
      />
    </div>
  );
}

export default Main;
