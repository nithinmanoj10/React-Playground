import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}
