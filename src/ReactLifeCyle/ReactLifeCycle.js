import React, { Component } from "react";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    console.log("constructor");

    super(props);
    this.state = {
      number: 1,
    };
  }
  static getDerivedStateFromProps(props, state) {
    //props mới và state hiện tại
    console.log("getDerivedStateFromProps");
    return null; // trả về state mới
  }

  render() {
    console.log("render");
    return (
      <div>
        {this.state.number}
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
      </div>
    );
  }
  // chạy sau khi render và chỉ chạy 1 lần duy nhất
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(preProps, preState) {
    console.log("componentDidUpdate");
    //preProps là props mới preState là state mới
    //chạy sau render và chạy sau khi state hoặc props thay đổi
    //Lưu ý không setState trong life cycle này sẽ lặp vô tận
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    //chạy khi component bị xóa khỏi giao diện
  }
}
