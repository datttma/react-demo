// GÕ TẮT LÀ RXREDUCER
import { layDanhSachPhim } from "../constants/QuanLyPhimConst";
const initialState = {
  danhSachPhim: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case layDanhSachPhim:
      state.danhSachPhim = action.danhSachPhim;
      return { ...state };
    default:
      return state;
  }
};
