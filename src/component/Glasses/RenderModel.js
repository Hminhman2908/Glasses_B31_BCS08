import React, { Component } from "react";
import model from "./model.jpg";

export default class RenderModel extends Component {
  render() {
    let {
      // price,
      name,
      // url,
      // desc,
    } = this.props;
    return (
      <div className="row">
        <div
          className="col-12"
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <img src={model} alt="model" />
          {this.props.url && (
            <img
              src={this.props.url}
              alt={name}
              style={{
                width: 250,
                position: "absolute",
                top: 153,
                left: 356,
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
