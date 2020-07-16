import React, { Component } from "react";

export default class RenderWithMap extends Component {
  state={
    producList :[
    { id: 1, name: "iphone 2G", price: 1000 },
    { id: 2, name: "iphone 3G", price: 2000 },
    { id: 3, name: "iphone 4", price: 3000 },
    { id: 4, name: "iphone 5", price: 5000 },
  ]
  }
  renderProduct = () => {
    let arrProductJSX = [];
    //binding cách 1
    // for(let i =0;i< this.producList.length;i++){
    //     //duyet qua mảng
    //     let product = this.producList[i];
    //     // từ product tạo các thẻ tr
    //     let trProduct = (
    //       <tr key={i}>
    //         <td>{product.id}</td>
    //         <td>{product.name}</td>
    //         <td>{product.price}</td>
    //         <td></td>
    //       </tr>
    //     );

    //       //push vào mảng kq
    //       arrProductJSX.push(trProduct);

    // }
    //cách 2
   return this.state.producList.map((productItem,index)=>{
       return (
         <tr key={index}>
           <td>{productItem.id}</td>
           <td>{productItem.name}</td>
           <td>{productItem.price}</td>
         </tr>
       );
   })
    console.log(arrProductJSX);

    return arrProductJSX;
  };
  render() {
    return (
      <div className="container">
        <h3>Product List</h3>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
