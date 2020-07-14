import React, { Component } from "react";
import BT2Item from "./BT2Item";

export default class BT2List extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <BT2Item />
          </div>
          <div className="col-3">
            <BT2Item />
          </div>
          <div className="col-3">
            <BT2Item />
          </div>
          <div className="col-3">
            <BT2Item />
          </div>
        </div>
      </div>
    );
  }
}
