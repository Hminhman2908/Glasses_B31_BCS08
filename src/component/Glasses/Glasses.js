import React, { Component } from "react";
import RenderListGlasses from "./RenderListGlasses";
// import { glassesArray } from "./DataGlasses";
import RenderModel from "./RenderModel";

export default class Glasses extends Component {
  constructor() {
    super();
    this.state = {
      glassSelected: {},
    };
    this.chooseGlasses = this.chooseGlasses.bind(this);
  }

  chooseGlasses(glasses) {
    this.setState({
      glassSelected: glasses,
    });
  }

  render() {
    return (
      <div className="container">
        <RenderModel {...this.state.glassSelected} />
        <RenderListGlasses chooseGlasses={this.chooseGlasses} />
      </div>
    );
  }
}

// Glasses
//     - Model
//         - có nhiệm vụ nhận GlassesSelected và render
//     - List Glasses
//         - onClick -> đẩy glasses ra Glasses -> Glasses hứng lại bằng state (GlassesSelected) và truyền xuống cho Model
