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
          <td>5700000$</td>
          <td>
            <button className="btn btn-info">-</button>
            <span className="mx-2">{card.soLuong}</span>
            <button className="btn btn-info">+</button>
          </td>
          <td>{card.giaBan}</td>
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
              <td>32300000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
