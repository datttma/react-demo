import React, { Component } from "react";
import data from "./data.json";
import Product from "./Product";
import ProductList from "./ProductList";
import Card from "./Card";

export default class ExampleCard extends Component {
  state = {
    proList: data,
    productSelected: null,
    cardList: [],
  };

  //vì ở bên Example k gọi đc onlick (nằm ở product) nên phải truyền cái phương thức này qua bên Product
  handleSelectPro = (pro) => {
    //khi mà click vào product nào thì sẽ đổi state productSelected lại là product đó
    this.setState({ productSelected: pro });
  };
  handleBuy = (card) => {
    // tạo cardList mới
    let cardUpdate = [...this.state.cardList];
    // this.state.cardList.push(card) cũng được viết kiểu trên chuẩn es6
    // set state
    //tim vi tri cua phan tu trong mang, nếu có thì sẽ trả về vị trí của nó trong mảng còn không thì -1
    let index = cardUpdate.findIndex((item) => item.maSP === card.maSP);
    if (index >= 0) {
      //neu tim thay
      cardUpdate[index].soLuong += 1;
    } else {
      //neu khong tim thay
      card.soLuong = 1;
      cardUpdate = [...cardUpdate, card];
    }
    this.setState({ cardList: cardUpdate });
  };
  handleDelete = (card) => {
    // 1 tìm vị trí
    // 2 cắt ra khỏi mảng
    // 3 setState
    let cardUpdate = [...this.state.cardList];
    //tim vi tri
    let index = cardUpdate.findIndex((item) => item.maSP === card.maSP);
    cardUpdate.splice(index, 1);
    this.setState({ cardList: cardUpdate });
  };
  // tăng giảm số lượng
  tangGiamSoLuong = (maSP, tangGiam) => {
    //Tăng là true còn giảm là false
    // console.log(maSP);
    // console.log("a", tangGiam);
    let cardUpdate = [...this.state.cardList];
    let index = cardUpdate.findIndex((item) => item.maSP === maSP);
    if (index >= 0) {
      if (tangGiam) {
        cardUpdate[index].soLuong += 1;
      } else {
        if (cardUpdate[index].soLuong > 0) {
          cardUpdate[index].soLuong -= 1;
        }
      }
      this.setState({ cardList: cardUpdate });
    }
    // tìm ra sản phẩm chứa maSP = maSP nút tăng giảm số lượng click
    //setState làm thay đổi số lượng
  };
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <Card
              cardList={this.state.cardList}
              handleDelete={this.handleDelete}
              tangGiamSoLuong={this.tangGiamSoLuong}
            />
            <ProductList
              proList={this.state.proList}
              handleSelectPro={this.handleSelectPro}
              handleBuy={this.handleBuy}
            />
          </div>
          {/* toán tử 3 ngôi condition ? dung:sai */}
          {/* lúc đầu vào productselected null mình muốn nó k hiện nên để là null */}
          {this.state.productSelected ? (
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.productSelected.hinhAnh}
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.productSelected.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.productSelected.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.productSelected.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.productSelected.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>{this.state.productSelected.ram}</td>
                      <td>4 GB</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.productSelected.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
