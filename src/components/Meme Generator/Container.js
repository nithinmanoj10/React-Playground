import React, { Component } from "react";

// import Meme from "./Meme";
import Button from "./Button";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      pictureNumber: Math.floor(Math.random() * 100),
      caption1: "",
      caption2: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.renderImage();
  }

  async renderImage() {
    this.setState({
      isLoading: true,
    });

    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();

    this.setState({
      imageURL: data.data.memes[this.state.pictureNumber].url,
      isLoading: false,
    });

    console.log(data.data.memes[this.state.pictureNumber]);
  }

  handleClick() {
    const randNumber = Math.floor(Math.random() * 100);
    this.setState({
      pictureNumber: randNumber,
      caption1: "",
      caption2: "",
    });
    this.renderImage();
    console.log(randNumber);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <form>
          <input
            type="text"
            name="caption1"
            id="1"
            onChange={this.handleChange}
            value={this.state.caption1}
            placeholder="Top Caption"
            className="caption-input"
          />
          <input
            type="text"
            name="caption2"
            id="2"
            onChange={this.handleChange}
            value={this.state.caption2}
            placeholder="Bottom Caption"
            className="caption-input"
          />
        </form>

        <div className="meme">
          {this.state.isLoading ? (
            <p className="loading">Loading...</p>
          ) : (
            <img
              src={this.state.imageURL}
              alt="Meme Image"
              className="meme__image"
            />
          )}
          <h1 className="caption caption--first">{this.state.caption1}</h1>
          <h1 className="caption caption--second">{this.state.caption2}</h1>
        </div>

        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}
