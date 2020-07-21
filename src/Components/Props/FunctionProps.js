import React from "react";

export default function FunctionProps(props) {
  // để nhận props bằng function thì phải truyền 1 tham số props vào , và không cần this.props nữa mà chỉ cẩn gọi đến thằng props là được
  const { hinh, ten, tuoi } = props.dog2;
  return (
    <div>
      <h2>Stateless Components</h2>
      <div className="card text-left">
        <img className="card-img-top" src={hinh} style={{ width: "300px" }} />
        <div className="card-body">
          <h4 className="card-title">{ten}</h4>
          <p className="card-text">{tuoi}</p>
        </div>
      </div>
    </div>
  );
}
