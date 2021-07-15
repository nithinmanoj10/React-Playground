import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

import Container from "./components/Meme Generator/Container";
import Header from "./components/Meme Generator/Header";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
