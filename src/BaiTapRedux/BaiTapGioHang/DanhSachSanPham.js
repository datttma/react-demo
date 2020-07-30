import React, { Component } from "react";
import SanPham from "./SanPham";
import { connect } from "react-redux";
class DanhSachSanPham extends Component {
  renderSanPham = () => {
    return this.props.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    let { hinhAnh } = this.props.spChiTiet;
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={hinhAnh} />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.props.spChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.props.spChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.props.spChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.props.spChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>ram</td>
                  <td>{this.props.spChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.props.spChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
//đây là hàm lấy state từ redux chuyển thành props của component
const mapStateToProps = (state) => {
  //state là rootReDucer
  return {
    //tạo ra 1 props mới, cái hàm này sẽ cho redux biết là mình cần lấy state nào
    spChiTiet: state.stateBaiTapGioHang.spChiTiet,
  };
};
export default connect(mapStateToProps)(DanhSachSanPham);
