import React, { Component } from "react";
import Productitem from "./Productitem";

export default class Productlist extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <div className="col-3">
            <Productitem />
          </div>
          <div className="col-3">
            <Productitem />
          </div>
          <div className="col-3">
            <Productitem />
          </div>
          <div className="col-3">
            <Productitem />
          </div>
        </div>
      </section>
    );
  }
}
