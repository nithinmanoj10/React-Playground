import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      handleClick: props.handleClick,
    };
  }

  render() {
    return (
      <a
        href="javascript:void(0)"
        className="button"
        onClick={this.state.handleClick}
      >
        Log {this.state.text}
      </a>
    );
  }
}
