import React, { Component } from "react";

export default class Meme extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isLoading: false,
      pictureNumber: props.number,
    };
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

  render() {
    return (
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
      </div>
    );
  }
}
