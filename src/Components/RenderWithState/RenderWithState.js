import React, { Component } from 'react'

export default class RenderWithState extends Component {
                 //this.state : thuộc tính chứa những giá trị thay đổi khi người dùng thao tác trên giao diện. Đây là thuộc tính có sẵn thuộc tính state nên khi sau có những giá trị thay đổi mình lưu vào đó
                 state = {
                   isLogin: false,
                 };
                 logout = () => {
                   let newState = {
                     isLogin: false,
                   };
                   this.setState(newState);
                 };
                 login = () => {
                   // this.state.isLogin =true; không được set lại giá trị state bằng cách này.
                   //
                   let newState = {
                     isLogin: true,
                   };
                   // phải dùng đến phương thức this.setState -- để đôi giá trị state , và render lại giao diện , setState nhận vào 2 tham số : tham số 1  : giá trị state mới , tham số 2 : callback thực thi ngay sau khi render. this.setState là 1 phương thức bất đồng bộ
                   this.setState(newState,()=>{console.log(this.state);
                    // thông thường tụi nó sẽ viết kiểu này
                    // this.setState({isLogin:true});
                   });
                   //nó sẽ in ra câu này trước
                   console.log(this.state);
                   // this.renderContent();
                   // react không cho phép chạy lại render
                   // this.render();
                 };

                 userName = "ten";
                 renderContent = () => {
                   // console.log(this.isLogin);
                   if (this.state.isLogin) {
                     return (
                       <p
                         onClick={() => {
                           this.logout();
                         }}
                       >
                         Hello {this.userName}
                       </p>
                     );
                   }
                   return (
                     <button
                       onClick={() => {
                         this.login();
                       }}
                     >
                       Đăng nhập{" "}
                     </button>
                   );
                 };
                 render() {
                   return (
                     <div>
                       {/* {this.isLogin? <p>Hello {this.userName}</p>:<button>Đăng Nhập</button>} */}
                       {/* viết dạng này hiểu là nếu isLogin =true thì sẽ in ra hello vs tên còn sai thì in ra button nếu mà nội dung render dài quá thì nên có cái hàm riêng*/}
                       {this.renderContent()}
                     </div>
                   );
                 }
               }
