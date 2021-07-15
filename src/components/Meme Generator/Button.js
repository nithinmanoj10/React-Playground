import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="button" onClick={this.props.handleClick}>
        Random
      </button>
    );
  }
}
