import React, { Component } from "react";
import Productitem from "./Productitem";

export default class Productlist extends Component {
  state = {
    spList: [
      { image: "./img/sp_iphoneX.png", name: "iPhone X" },
      { image: "./img/sp_note7.png", name: "Note 7" },
      { image: "./img/sp_blackberry.png", name: "Blackberry" },
      { image: "./img/sp_vivo850.png", name: "Vivo850" },
    ],
  };
  renderProductItem = () => {
    return this.state.spList.map((sp, index) => {
      return (
        <div className="col-3" key={index}>
          <Productitem phone={sp} />
        </div>
      );
    });
  };
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderProductItem()}</div>
      </section>
    );
  }
}
