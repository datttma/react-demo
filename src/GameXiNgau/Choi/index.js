import React, { Component } from "react";
import { connect } from "react-redux";
class Choi extends Component {
  render() {
    return (
      <div className="xi-ngau__play text-center">
        <button
          className="btn btn-success btn-lg"
          style={{
            fontSize: 30,
            backgroundColor: "white",
            color: "#d83226",
            fontWeight: "bold",
          }}
          onClick={() => {
            this.props.choiGame();
          }}
        >
          Chơi Game
        </button>
      </div>
    );
  }
}
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
export default connect(null, mapDispatchToProps)(Choi);
