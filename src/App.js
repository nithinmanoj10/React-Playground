import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/React-Site/Header";
import Features from "./components/React-Site/Features";
import Footer from "./components/React-Site/Footer";
import MyPlanets from "./components/React-Site/MyPlanets";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <MyPlanets />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
