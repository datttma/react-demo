import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card mt-5">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="a" />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.gia}</p>
            <button
              onClick={() => {
                this.props.xemChiTiet(sanPham);
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
//hàm lấy giá trị callback từ store về để đưa dữ liệu lên redux, hàm này sẽ gửi dữ liệu lên redux store
const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTiet: (sanPham) => {
      //Định nghĩa 1 props cho component này là 1 cái hàm
      // Dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
      console.log("san pham được click", sanPham);
      // Dùng hàm dispatch của redux trả ra để đưa dữ liệu lên reducer xử lý
      //action có 2 giá trị
      const action = {
        type: "XEM_CHI_TIET", // GÍa TRỊ BẮT BUỘC PHẢI CÓ
        sanPham: sanPham,
      };
      dispatch(action); // gửi lên reducer
    },
  };
};
//kết nối với store bằng connect (nhớ bỏ export default)
export default connect(null, mapDispatchToProps)(SanPham);
