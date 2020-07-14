import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
                 state = {
                   srcImg: './img/black-car.jpg',
                 };
                 renderImg = () => {
                   return (
                     <img className="w-100" src={this.state.srcImg} alt="a" />
                   );
                 };
                 setSrcimg=(color)=>{
                      let imgColor =`./img/${color}-car.jpg`;
                      this.setState({srcImg:imgColor});
                 }
                 render() {
                   return (
                     <div className="container p-5">
                       {/* b1 dàn layout
                    b2 Xác định nguồn dự liệu thay đổi => tổ chức lưu trữ
                    b3 xử lý chức năng
                    */}
                       <div className="row">
                         <div className="col-6">
                           <p>Please choose your favorite about car's color</p>
                           {this.renderImg()}
                         </div>
                         <div className="col-6">
                           <div className="row">
                             <div className="col-4">
                               <button onClick={()=>{
                                   this.setSrcimg('red')
                               }} type="button" className="btn btn-danger">
                                 Danger
                               </button>
                             </div>
                             <div className="col-4">
                               <button onClick={()=>{
                                   this.setSrcimg("silver");
                               }}
                                 type="button"
                                 className="btn btn-secondary"
                               >
                                 Secondary
                               </button>
                             </div>
                             <div className="col-4">
                               <button onClick={()=>{
                                   this.setSrcimg("black");
                               }} className="btn btn-dark">Dark</button>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
