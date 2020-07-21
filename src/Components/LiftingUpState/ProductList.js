import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  renderCard = () => {
    return this.props.proList.map((product, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Product
            handleSelectPro={this.props.handleSelectPro}
            product={product}
            handleBuy={this.props.handleBuy}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderCard()}</div>
      </div>
    );
  }
}
