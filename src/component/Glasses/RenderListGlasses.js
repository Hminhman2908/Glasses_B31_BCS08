import React, { Component } from "react";
import ItemGlasses from "./ItemGlasses";
import { glassesArray } from "./DataGlasses";

export default class RenderListGlasses extends Component {
  renderListGlasses = () => {
    return glassesArray.map((item, index) => {
      return (
        <div className="col-3" style={{ marginBottom: 10 }}>
          <ItemGlasses
            chooseGlasses={() => this.props.chooseGlasses(item)}
            item={item}
            key={`${item.id}-${index}`}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderListGlasses()}</div>;
  }
}
