import React, { Component } from "react";

export default class ItemGlasses extends Component {
  render() {
    let {
      // id,
      // price,
      // name,
      thumbnail,
      // desc,
    } = this.props.item;
    return (
      <>
        <button
          onClick={this.props.chooseGlasses}
          className="btn"
          // style={{ border: "none" }}
        >
          <img src={thumbnail} alt="" width={100} height={80} />
        </button>
      </>
    );
    // (
    //   <div>
    //     <div className="card text-left">
    //       <img className="card-img-top" src={thumbnail} alt="" width={100} />
    //       <div className="card-body">
    //         <h4 className="card-title">{name}</h4>
    //         <h4 className="card-title">
    //           {price}
    //           <sup>$</sup>
    //         </h4>
    //         <p className="card-text">{desc}</p>
    //       </div>
    //       <button onClick={this.props.chooseGlasses}>
    //         <img src={thumbnail} alt="" />
    //       </button>
    //     </div>
    //     <button onClick={this.props.chooseGlasses}>
    //       <img src={thumbnail} alt="" width={100} height={80} />
    //     </button>
    //   </div>
    // );
  }
}
