import React, { Component } from "react";
import styleDataBinding from './DataBinding.module.css';
export default class DataBinding extends Component {
  //thuoc tinh sanPham --- dùng this để truy xuất thuộc tính
  sanPham = {
    ma: 1,
    tenSp: "Iphone X",
    gia: 1111111,
    hinhAnh: "https://picsum.photos/200/300",
  };
  renderThongTin = ()=>{
      return (
        <div className="card">
          <img className="card-img-top" src={this.sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{this.sanPham.tenSp}</h4>
            <p className="card-text">{this.sanPham.gia}</p>
          </div>
        </div>
      );
  };
  // render() là 1 phương thức có sẵn để hiện thị giao diện
  render() {
    //binding dữ liệu là biến
    let title = "CyberSoft";
    let scrImg = `https://picsum.photos/200/300`;
    let hocVien = {
      ma: 1,
      ten: "nguyen van a",
      tuoi: 12,
    };
    //binding dữ liệu là hàm nội dung phải trả về 1 số chuỗi, thẻ html components có duy nhất 1 thẻ bao phủ
    const renderImg = () => {
      return (
        <div>
          <img src="https://picsum.photos/200/100" />
        </div>
      );
    };
    //có thể css bằng cách này
    let objStyle= {background:'black',color:'white'};
    return (
      <div>
        <h1 id="title" className={`${styleDataBinding.header}`}>
          {title}
        </h1>
        <img src={scrImg} />
        <div className="card">
          <div className="card-body">
            <h4 className="card-title titleDemo">{hocVien.ten}</h4>
            <p className="card-text">{hocVien.tuoi}</p>
          </div>
        </div>
        <div className="container" style={{background:'#000',color:'white',color:'white'}}>Hàm {renderImg()}</div>
        {this.renderThongTin()}
      </div>
    );
  }
}
