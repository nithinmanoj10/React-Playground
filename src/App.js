import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/style.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderIP = this.renderIP.bind(this);
  }

  async componentDidMount() {
    const URL =
      "https://geo.ipify.org/api/v1?apiKey=at_PYGvqHqBThM53saBGsE7htlVh1VMn";
    this.renderIP(URL);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const URL =
      "https://geo.ipify.org/api/v1?apiKey=at_PYGvqHqBThM53saBGsE7htlVh1VMn&ipAddress=" +
      this.state.ipInput;
    this.renderIP(URL);
  }

  async renderIP(URL) {
    try {
      this.setState({
        isLoading: true,
      });

      const response = await fetch(URL);
      const data = await response.json();

      this.setState({
        ip: data.ip,
        isp: data.isp,
        city: data.location.city,
        region: data.location.region,
        ipInput: "",
        isLoading: false,
        errorMessage: "",
      });
    } catch {
      console.error("L");
      this.setState({
        isLoading: false,
        ip: "",
        isp: "",
        city: "",
        region: "",
        errorMessage: "Can't find IP Address",
      });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <form>
              <input
                placeholder="Enter IP Address"
                type="text"
                name="ipInput"
                onChange={this.handleChange}
                className="input__ip"
              />
              <button onClick={this.handleClick}>Search</button>
            </form>

            <h1>{this.state.ip}</h1>
            <h3>{this.state.isp}</h3>
            <h4>
              {this.state.city}, {this.state.region}
            </h4>
            <p className="error-message">{this.state.errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
