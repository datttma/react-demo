import React, { Component } from "react";
// nhận props bằng class thì gọi là state full component
// nhận props bằng function thì gọi là stateless component
export default class ClassProps extends Component {
  render() {
      // duùng cách này để giảm ngắn câu binding  thay vì this.props.dog.image thì gọi ra hết ở 1 chỗ r chỉ dùng bth thôi
   const  {image,name,age}=this.props.dog;
    return (
      <div>
          <h2>Statefull component</h2>
        <div className="card text-center">
          <img
            className="card-img-top"
            src={image}
            alt="aaa"
            style={{width:"300px",margin:"0 auto"}}
          />
          <div className="card-body">
    <h4 className="card-title">{this.props.name}</h4>
    <p className="card-text">{this.props.dog.age}</p>
          </div>
        </div>
      </div>
    );
  }
}
