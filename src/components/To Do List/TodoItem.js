import React from "react";
import "../../css/style.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      <div className="todo-item__info">
        <h4 className="todo-item__info__name">{props.todo.name}</h4>
        <p className="todo-item__info__time">{props.todo.time}</p>
      </div>
    </div>
  );
}

export default TodoItem;
