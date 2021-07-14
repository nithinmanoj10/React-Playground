import React, { Component } from "react";
import SectionTab from "./SectionTab";

export default class Section extends Component {
  render() {
    return (
      <div className="planets__section">
        <SectionTab name="Overview" active={true} />
        <SectionTab name="Structure" active={false} />
        <SectionTab name="Internal" active={false} />
      </div>
    );
  }
}
