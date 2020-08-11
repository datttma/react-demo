import React, { Component } from "react";
import { connect } from "react-redux";
import { THEM_NGUOI_DUNG } from "../redux/constants/QLSVConst";
//CHÚ Ý NHỚ CÀI THƯ VIỆN LODASH SO SÁNH OBJECT LÊN ĐỌC DOCS CỦA NÓ LÀ HIỂU
//IMPORT THỬ VIỆN XỬ LÍ OBJECT MẢNG JAVASCRÍPT
import _ from "lodash";
class Form_Validation extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      soDt: "",
      hoTen: "",
      email: "",
      maNhom: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      soDt: "",
      hoTen: "",
      email: "",
      maNhom: "",
    },
  };
  handleChange = (event) => {
    // let value = event.target.value;
    // //event.target.value là thẻ(component) xảy ra sự kiện onChange
    // let name = event.target.name;
    let { value, name } = event.target;
    let label = event.target.getAttribute("label");
    let type = event.target.getAttribute("type");
    // console.log(name, value);
    //tách giá trị values và errors của state ra xử lí riêng
    let newValues = {
      ...this.state.values,
      [name]: value,
    };

    //xử lí error
    //  RỖNG
    let errorMess = "";
    if (value.trim() == "") {
      errorMess = label + " không được bỏ trống ! ";
    } else {
      //KIỂM TRA MAIL
      let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (type === "email") {
        if (!regexEmail.test(value)) {
          errorMess += label + " không hợp lệ";
        }
      }
      //KIỂM TRA NHẬP SỐ
      let regexNumber = /^[0-9]+$/;
      if (type === "phone") {
        if (!regexNumber.test(value)) {
          errorMess += label + " chỉ được phép nhập số ";
        }
      }
    }

    let newErrors = {
      ...this.state.errors,
      [name]: errorMess,
    };

    this.setState(
      {
        //như v nó sẽ động về mặt thuộc tính , thằng nào xảy ra sư kiện change thì nó sẽ lấy name của thằng đó làm thuộc tính và sẽ set state lại Object Literal
        values: newValues,
        errors: newErrors,
      },
      () => {
        // console.log("state", this.state);
      }
    );
  };
  handleSubmit = (event) => {
    //NGĂN SỰ KIỆN RELOAD LẠI FORM,ĐỂ DỄ KIỂM TRA
    event.preventDefault();
    let { values, errors } = this.state;
    //Duyệt các trường value của state
    for (let key in values) {
      if (values[key].trim() === "") {
        alert("Dữ liệu không hợp lệ");
        return;
      }
    }
    //DUYỆT CÁC TRƯỜNG VALUE CỦA ERROR CỦA STATE
    for (let key in values) {
      if (errors[key].trim() !== "") {
        alert("Dữ liệu không hợp lệ");
        return;
      }
    }
    //SUBMIT LÊN REDUCER THÊM NGƯỜI DÙNG
    this.props.dispatch({
      type: THEM_NGUOI_DUNG,
      nguoiDung: this.state.values,
    });
  };
  //chạy sau khi nhận props và trước hàm render => trả về state mới
  // static getDerivedStateFromProps(newProps, currentState) {
  //   //props mới và state hiện tại
  //   console.log("getDerivedStateFromProps");
  //   console.log("new props", newProps);
  //   if (
  //     newProps.nguoiDungEdit.edit &&
  //     newProps.nguoiDungEdit.taiKhoan !== currentState.values.taiKhoan
  //   ) {
  //     let newState = { ...currentState, values: newProps.nguoiDungEdit };
  //     return { ...newState }; // trả về state mới
  //   }
  //   return null;
  // }
  // componentWillReceiveProps(newProps) {
  //   // đây là life cycle cũ rồi sẽ bị warning nhưng vẫn xài được , phần comment ở trên là 2019 nhưng chưa đúng, nên cần xem lại video codepro.
  //   this.setState({ values: newProps.nguoiDungEdit });
  // }
  render() {
    let { taiKhoan, email, matKhau, soDt, hoTen, maNhom } = this.state.values;
    return (
      <div class="card text-white bg-dark text-light">
        <h2 className="text-center">Form Đăng Ký</h2>
        <div class="card-body">
          <form onSubmit={this.handleSubmit} className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài Khoản</p>
                  <input
                    value={taiKhoan}
                    label="Tài Khoản"
                    className="form-control"
                    name="taiKhoan"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Mật Khẩu</p>
                  <input
                    value={matKhau}
                    label="Mật Khẩu"
                    className="form-control"
                    name="matKhau"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">
                    {this.state.errors.matKhau}
                  </p>
                </div>
                <div className="form-group">
                  <p>Điện Thoại</p>
                  <input
                    value={soDt}
                    type="phone"
                    label="Số Điện Thoại"
                    className="form-control"
                    name="soDt"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.soDt}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ Tên</p>
                  <input
                    value={hoTen}
                    label="Họ tên"
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    value={email}
                    type="email"
                    label="Email"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                  <p>Mã nhóm</p>
                  <input
                    value={maNhom}
                    label="Mã Nhóm"
                    className="form-control"
                    name="maNhom"
                    onChange={this.handleChange}
                  />
                  <p className="text text-danger">{this.state.errors.maNhom}</p>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-success">Đăng ký</button>
                <button
                  className="btn btn-primary ml-4"
                  onClick={() => {
                    this.props.dispatch({
                      type: "CAP_NHAT",
                      nguoiDung: this.state.values,
                    });
                  }}
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  //preProps là props trước khi render
  // preState là state trước khi render
  componentDidUpdate(preProps, preState) {
    //chỉ setState khi người dùng click chỉnh sửa
    if (!_.isEqual(preProps.nguoiDungEdit, this.props.nguoiDungEdit)) {
      this.setState({
        values: this.props.nguoiDungEdit,
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.QLSVReducer.nguoiDungEdit,
  };
};
export default connect(mapStateToProps, null)(Form_Validation);
