import React, { Component } from "react";

export default class SectionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      active: this.props.active,
    };
  }

  render() {
    let styles = {};
    console.log(this);
    if (this.state.active) {
      styles = {
        color: "#000",
        fontWeight: "400",
        borderBottom: "2px solid #61dafb",
      };
    }

    return (
      <a
        href="javascript:void(0)"
        className="planets__section__tab"
        style={styles}
      >
        {this.state.name}
      </a>
    );
  }
}
