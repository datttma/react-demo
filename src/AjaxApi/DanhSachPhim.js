import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { layDanhSachPhimAjax } from "../redux/action/QuanLyPhimAction";
class DanhSachPhim extends Component {
  renderPhim = () => {
    return this.props.danhSachPhim.map((item, index) => {
      return (
        <div className="col-4 p-2" key={index}>
          <div className="card text-left">
            <img
              className="card-img-top w-100"
              src={item.hinhAnh}
              alt={index}
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenPhim}</h4>
              <p className="card-text">{item.ngayKhoiChieu}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  layDanhSachPhim = () => {
    //   //Xử lý gọi về server
    //   var promise = axios({
    //     method: "get",
    //     url:
    //       "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   });
    //   promise
    //     .then((result) => {
    //       console.log("danh sach phim", result.data);
    //       this.setState({ danhSachPhim: result.data });
    //     })
    //     .catch((erorr) => {
    //       console.log(erorr.response.data);
    //     });
    this.props.dispatch(layDanhSachPhimAjax());
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            this.layDanhSachPhim();
          }}
        >
          Lấy tên phim
        </button>
        <h3 className="display-4">Danh Sách Phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
  //lifecycle componentDidMount tự động chạy khi component được load sau hàm render nó sẽ chỉ 1 lần duy nhất
  componentDidMount() {
    this.layDanhSachPhim();
  }
}
const mapStateToProps = (state) => ({
  danhSachPhim: state.QuanLyPhimReducer.danhSachPhim,
});
export default connect(mapStateToProps)(DanhSachPhim);
