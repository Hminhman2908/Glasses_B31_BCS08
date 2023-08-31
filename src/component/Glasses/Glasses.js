import React, { Component } from "react";
import RenderListGlasses from "./RenderListGlasses";
import { glassesArray } from "./DataGlasses";

export default class Glasses extends Component {
  state = {
    glassesArray: glassesArray,
  };
  render() {
    return (
      <div>
        <RenderListGlasses list={this.state.glassesArray} />
      </div>
    );
  }
}
