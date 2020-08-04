import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  renderTaiXiu = () => {
    if (this.props.taiXiu) {
      return "Tài";
    } else {
      return "Xỉu";
    }
  };
  render() {
    return (
      <div
        className="xi-ngau__ket-qua text-center mt-4"
        style={{ color: "white", fontWeight: "bold", fontSize: 30 }}
      >
        <p>
          Bạn Chọn :{" "}
          <span style={{ color: "#f5cc74", fontSize: 35 }}>
            {this.renderTaiXiu()}
          </span>
        </p>
        <p>
          Số Bàn Thắng
          <span style={{ color: "#f5cc74", fontSize: 35 }}>
            {this.props.soBanThang}
          </span>
        </p>
        <p>
          Tổng Số Bàn Chơi :
          <span style={{ color: "#f5cc74", fontSize: 35 }}>
            {this.props.soBanChoi}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.GameXiNgauReducer.taiXiu,
    soBanThang: state.GameXiNgauReducer.soBanThang,
    soBanChoi: state.GameXiNgauReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQua);
