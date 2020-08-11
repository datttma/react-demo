import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  //PURECOMPONENT CŨNG GIỐNG COMPONENT NHƯNG KHI COMPONENT CHA RENDER LẠI GIAO DIỆN, NẾU MÀ NÓ KHÔNG CÓ 1 STATE HAY PROPS NÀO LIÊN QUAN ĐẾN COMPONENT CHA THÌ NÓ SẼ KHÔNG RENDER
  render() {
    console.log("childComponentRender");
    return (
      <ul className="nav nav-tabs">
        <h1>{this.props.number}</h1>
        <h1>{this.props.user.name}</h1>
        <li className="nav-item">
          <a href="#" className="nav-link active">
            Active
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Action
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Another link
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link disabled">
            Disabled
          </a>
        </li>
      </ul>
    );
  }
}
