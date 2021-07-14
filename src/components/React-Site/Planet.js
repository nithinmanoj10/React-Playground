import Facts from "./Facts";
import Section from "./Section";

import React, { Component } from "react";

export default class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.planet.name,
      description: this.props.planet.overview.content,
      facts: this.props.planet,
      pos: 1,
    };
  }

  handleClick = () => {
    const newPos = this.state.pos;
    let newDesc;

    this.setState((prevState) => {
      if (newPos % 3 == 0) {
        newDesc = this.props.planet.overview.content;
      }
      if (newPos % 3 == 1) {
        newDesc = this.props.planet.structure.content;
      }
      if (newPos % 3 == 2) {
        newDesc = this.props.planet.geology.content;
      }

      return {
        pos: prevState.pos + 1,
        description: newDesc,
      };
    });
  };

  render() {
    return (
      <div className="planet" onClick={this.handleClick}>
        <h2 className="planet__name">{this.state.name}</h2>
        <p className="planet__description">{this.state.description}</p>
        <Facts fact={this.state.facts} />
        <Section />
      </div>
    );
  }
}
