import React, { Component, PureComponent } from "react";
import ChildComponent_Pure from "./ChildComponent_Pure";
import ChildComponent from "./ChildComponent";

export default class PureComponentDemo extends Component {
  state = {
    number: 1,
    user: {
      id: 1,
      name: "tèo",
    },
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4">{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            let newUser = this.state.user;
            newUser.name = "khải";
            this.setState({ user: newUser });
          }}
        >
          Change Name
        </button>
        {/* <ChildComponent_Pure
          user={this.state.user}
          number={this.state.number}
        /> */}
        <ChildComponent user={{ ...this.state.user }} />
      </div>
    );
  }
}
