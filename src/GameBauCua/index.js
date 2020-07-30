import React, { Component } from "react";
import "./style.css";
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";
// kết nối giữa react và redux
import { connect } from "react-redux";
class GameBauCua extends Component {
  render() {
    return (
      <div className="bau-cua">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="bau-cua__tien font-weight-bold">
              Tổng Tiền : {this.props.tongTien}$
            </div>
            <h2 className="text-center text-danger">Bầu Cua</h2>
            <div>
              <button
                className="btn btn-info"
                onClick={() => {
                  this.props.choiGame();
                }}
              >
                Chơi Game
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <DanhSachCuoc />
            </div>
            <div className="col-md-12 col-lg-5">
              <XucXac />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //key là props của component(this.props.tên key) : value là state of store
    tongTien: state.GameBauCuaReducer.tongTien,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    choiGame: () => {
      const action = {
        type: "CHOI_GAME",
      };
      dispatch(action);
    },
  };
};
// hàm dùng connect lấy dữ liệu trên store về,  có 2 tham số (1)(2). 1 có 2 tham số là hàm mapStateToProps để lấy dữ liệu và dispatchtoprops , 2 là component cần connect
export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua);
