import React, { Component } from "react";
import { connect } from "react-redux";
class DieuKhien extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((item, index) => {
      return (
        <span key={index}>
          <i
            className={item.classes}
            style={{ color: "white", fontSize: 150 }}
          />
        </span>
      );
    });
  };
  render() {
    return (
      <div className="xi-ngau__control row text-center mt-4">
        <div className="col-4">
          <button
            className="btn btn-lg rounded-circle"
            style={{ overflow: "hidden" }}
            onClick={() => {
              this.props.chonTaiXiu(true);
            }}
          >
            <img src="./img/tai.PNG" alt="tai" />
          </button>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-around">
          {this.renderXucXac()}
        </div>
        <div className="col-4">
          <button
            className="btn btn-lg rounded-circle"
            style={{ overflow: "hidden" }}
            onClick={() => {
              this.props.chonTaiXiu(false);
            }}
          >
            <img src="./img/xiu.PNG" alt="xiu" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { xucXac: state.GameXiNgauReducer.xucXac };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    chonTaiXiu: (taiXiu) => {
      const action = {
        type: "CHON_TAI_XIU",
        taiXiu: taiXiu,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(DieuKhien);
