import { THEM_NGUOI_DUNG } from "../constants/QLSVConst";
const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "123",
      matKhau: "sss",
      email: "aa",
      soDt: "222",
      hoTen: "aa",
      maNhom: "GP16",
    },
  ],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case THEM_NGUOI_DUNG: {
      let mangNguoiDungUpdate = [...state.mangNguoiDung, actions.nguoiDung];
      return { ...state, mangNguoiDung: mangNguoiDungUpdate };
    }
    default:
      return state;
  }
};
