import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

import Meme from "./components/Meme Generator/Meme";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Meme />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
