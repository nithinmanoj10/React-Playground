import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      message: props.message,
    };
  }

  render() {
    return (
      <div className="message">
        <h2>You are Logged {this.state.message}</h2>
      </div>
    );
  }
}
