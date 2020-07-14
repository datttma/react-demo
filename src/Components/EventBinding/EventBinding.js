import React, { Component } from "react";

export default class EventBinding extends Component {
    // hàm để xuất hiên alert ( khi gọi tới phương thức này thì không nên có () nếu có () khi webload nó sẽ chạy luôn)
    handleAlert =()=>{
        alert('Hello')
    }
    showMessage = (mess)=>{
        alert('Hello '+mess);
    }
  render() {
    return (
      <div>
          {/* cách 1 truyền callback function xử lý sự kiện */}
          <h1>Cách 1  Truyền callback function</h1>
        <button type="button" className="btn btn-primary" onClick={this.handleAlert}>Primary</button>
        {/* nếu muốn viết theo cách 1 mà hàm không chạy khi mình ()thì phải .bind(this,'thamso') */}
        <button onClick={this.showMessage.bind(this,'bind this')}>Bind This</button>
        {/* cách 2 : dùng arrow function để gọi tới cái hàm mình muốn chạy, ưu tiên dùng cách này vì có thể truyền được tham số*/}
        <h1 className="">Cách 2 dùng arrowfucntion</h1>
         <button type="button" className="btn btn-primary" onClick={()=>{this.handleAlert();}}>Primary</button>
         <button className="btn btn-primary" onClick={()=>{this.showMessage('cybersoft')}}>Click Me</button>
      </div>
    );
  }
}
