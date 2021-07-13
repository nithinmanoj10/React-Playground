import "../../css/style.css";

import React, { Component } from "react";
import todosData from "./todosData";

export default class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.task.completed}
          onChange={() => {
            this.props.handleChange(this.props.task.id);
          }}
        ></input>
        <div className="todo-item__info">
          <h4 className="todo-item__info__name">{this.props.task.text}</h4>
          <p className="todo-item__info__time">{this.props.task.time}</p>
        </div>
      </div>
    );
  }
}
