import React, { Component } from "react";
import ItemGlasses from "./ItemGlasses";

export default class RenderListGlasses extends Component {
  renderListGlasses = () => {
    return this.props.list.map((item, index) => {
      return <ItemGlasses item={item} key={index} />;
    });
  };
  render() {
    return <div>{this.renderListGlasses()}</div>;
  }
}
