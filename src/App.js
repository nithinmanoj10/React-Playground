import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import IpAddress from "./components/IP Address/IpAddress";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <IpAddress className="ip-address" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
