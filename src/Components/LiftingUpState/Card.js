import React, { Component } from "react";

export default class Card extends Component {
  renderCard = () => {
    return this.props.cardList.map((card, index) => {
      return (
        <tr key={index}>
          <td>1</td>
          <td>
            <img src={card.hinhAnh} alt="asda" style={{ width: 100 }} />
          </td>
          <td>{card.tenSP}</td>
          <td>{card.giaBan.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => this.props.tangGiamSoLuong(card.maSP, false)}
            >
              -
            </button>
            <span className="mx-2">{card.soLuong}</span>
            <button
              className="btn btn-info"
              onClick={() => this.props.tangGiamSoLuong(card.maSP, true)}
            >
              +
            </button>
          </td>
          <td>{card.giaBan.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleDelete(card);
              }}
            >
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    //reduce là hàm sẽ thực thi 1 lệnh cho tất cả các phần tử của 1 mảng lần lượt từ trái sang phải, và thu về 1 kết quả tích lũy. dạng như 1 +2+3+4 . tongtien sẽ là kết quả trả về, spgh sẽ là 1 đại diện cho đối tượng sản phẩm, số 0 sẽ là giá trị ban đầu.
    return this.props.cardList
      .reduce((tongTien, spGH, index) => {
        return (tongTien = spGH.soLuong * spGH.giaBan);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div>
        <h2>Card</h2>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Hình Ảnh</th>
              <th>Tên sảm phẩm</th>
              <th>Giá bán</th>
              <th>số lượng</th>
              <th>thành giá</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderCard()}</tbody>
          <tfoot>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td>{this.tinhTongTien()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
