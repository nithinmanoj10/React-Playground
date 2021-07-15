import React, { Component } from "react";

export default class Meme extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.renderImage();
  }

  async renderImage() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();

    this.setState({
      imageURL: data.data.memes[32].url,
    });

    console.log(data.data.memes[32]);
  }

  render() {
    return (
      <div className="meme">
        <img
          src={this.state.imageURL}
          alt="Meme Image"
          className="meme__image"
        />
      </div>
    );
  }
}
