import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/React-Site/Header";
import Features from "./components/React-Site/Features";
import MyPlanets from "./components/React-Site/MyPlanets";
import Footer from "./components/React-Site/Footer";

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
