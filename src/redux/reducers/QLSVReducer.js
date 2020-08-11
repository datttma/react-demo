import { THEM_NGUOI_DUNG } from "../constants/QLSVConst";
const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: "1",
      email: "2",
      soDt: "2",
      hoTen: "22",
      maNhom: "2",
    },
    {
      taiKhoan: "nguyenvanb",
      matKhau: "1",
      email: "2",
      soDt: "2",
      hoTen: "22",
      maNhom: "2",
    },
  ],
  nguoiDungEdit: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
    maNhom: "",
  },
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case THEM_NGUOI_DUNG: {
      let mangNguoiDungUpdate = [
        ...state.mangNguoiDung,
        { ...actions.nguoiDung },
      ];
      return { ...state, mangNguoiDung: mangNguoiDungUpdate };
    }
    case "CHINH_SUA": {
      //LẤY NGƯỜI DÙNG ĐƯỢC CLICK GÁN VÀO nguoiDungEdit
      state.nguoiDungEdit = { ...actions.nguoiDung };
    }
    case "CAP_NHAT": {
      //mỗi lần click sẽ đưa giá tri người dùng nhập vào qua actions.nguoiDUng
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      let index = mangNguoiDungUpdate.findIndex(
        (nd) => nd.taiKhoan === actions.nguoiDung.taiKhoan
      );
      // nếu tìm thấy vị trí người dùng đó trong mảng  = người dùng gửi lên
      if (index != -1) {
        // gán giá trị người dùng trong mảng = mảng người dùng gửi lên
        mangNguoiDungUpdate[index] = actions.nguoiDung;
      }
      //gán mảng người dùng hiện tại = mảng người dùng đã cập nhật
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    case "XOA": {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      let index = mangNguoiDungUpdate.findIndex(
        (nd) => nd.taiKhoan === actions.nguoiDung.taiKhoan
      );
      console.log(index);
      if (index !== -1) {
        mangNguoiDungUpdate.splice(index, 1);
      }
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
