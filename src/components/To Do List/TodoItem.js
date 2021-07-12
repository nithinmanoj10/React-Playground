import React from "react";
import "../../css/style.css";

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      <div className="todo-item__info">
        <h4 className="todo-item__info__name">Design Review</h4>
        <p className="todo-item__info__time">08:30 AM</p>
      </div>
    </div>
  );
}

export default TodoItem;
