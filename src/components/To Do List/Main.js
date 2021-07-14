import "../../css/style.css";

import TodoItem from "./TodoItem";
import todosData from "./todosData";

import React, { Component } from "react";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      todos: todosData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map(function (item) {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedTodo,
      };
    });
  }

  render() {
    const TodoItemJSX = this.state.todos.map((item) => {
      return (
        <TodoItem key={item.id} task={item} handleChange={this.handleChange} />
      );
    });

    return <div className="main">{TodoItemJSX}</div>;
  }
}
