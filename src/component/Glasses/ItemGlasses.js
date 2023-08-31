import React, { Component } from "react";
// import img1 from "../../../public/glasses/"

export default class ItemGlasses extends Component {
  render() {
    let {
      // id,
      price,
      name,
      url,
      desc,
    } = this.props.item;
    return (
      <div className="container">
        <div className="card text-left">
          <img
            className="card-img-top"
            src={`./glasses/${url}`}
            alt=""
            width={100}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h4 className="card-title">
              {price}
              <sup>$</sup>
            </h4>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
