import React, { Component } from "react";
import { tangGiamAction } from "../../redux/action/GamBauCuaAction";
import { connect } from "react-redux";
class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuoc.map((arr, index) => {
      return (
        <div className="card col-4" key={index}>
          <img
            className="card-img-top"
            src={arr.hinhAnh}
            alt="Card cap"
            style={{ height: 200 }}
          />
          <div className="card-body">
            <h5 className="card-title" />
            <div className="d-flex justify-content-around align-items-center">
              <button
                className="btn btn-info"
                onClick={() => {
                  this.props.tangGiamMucCuoc(arr.ma, false);
                }}
              >
                -
              </button>
              <span>{arr.giaCuoc}$</span>
              <button
                className="btn btn-info"
                onClick={() => {
                  this.props.tangGiamMucCuoc(arr.ma, true);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bau-cua__chon">
        <div className="bau-cua__bang row">{this.renderDanhSachCuoc()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //key là props , value là 1 cái method send action to reducer
    tangGiamMucCuoc: (ma, tangGiam) => {
      // gọi dispatch truyền vào action để đưa cái action vào reducer
      dispatch(tangGiamAction(ma, tangGiam));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
