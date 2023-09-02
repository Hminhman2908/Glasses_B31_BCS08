import React, { Component } from "react";
import model from "./model.jpg";

export default class RenderModel extends Component {
  render() {
    let { price, name, url, desc } = this.props;
    return (
      <div className="container">
        <img src={model} alt="model" />
        {this.props.url && <img src={this.props.url} alt={name} />}
      </div>
    );
  }
}
