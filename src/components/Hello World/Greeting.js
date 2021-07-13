import React, { Component } from "react";

export default class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      reply: "Yooo",
    };
  }

  getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }

    return timeOfDay;
  }

  render() {
    return (
      <div>
        <h1>
          Good {this.getTimeOfDay()} to you, sir or madam! {this.state.reply}
        </h1>
      </div>
    );
  }
}
