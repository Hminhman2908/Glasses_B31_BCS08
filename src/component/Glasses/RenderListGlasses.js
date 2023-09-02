import React, { Component } from "react";
import ItemGlasses from "./ItemGlasses";
import { glassesArray } from "./DataGlasses";

export default class RenderListGlasses extends Component {
  renderListGlasses = () => {
    return glassesArray.map((item, index) => {
      return (
        <ItemGlasses
          chooseGlasses={() => this.props.chooseGlasses(item)}
          item={item}
          key={`${item.id}-${index}`}
        />
      );
    });
  };
  render() {
    return <div>{this.renderListGlasses()}</div>;
  }
}
