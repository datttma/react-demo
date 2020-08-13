import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import GameBauCuaReducer from "./GameBauCuaReducer";
import QLSVReducer from "./QLSVReducer";
import QuanLyPhimReducer from "./QuanLyPhimReducer";
const rootReducer = combineReducers({
  //nơi khai báo các state theo từng nghiệp vụ
  stateBaiTapGioHang: BaiTapGioHangReducer,
  // GameBauCuaReducer:GameBauCuaReducer ghi cách này cũng được nhưng dài , ghi ngắn hơn sẽ như ở dưới
  GameBauCuaReducer,
  QLSVReducer,
  QuanLyPhimReducer,
});
export default rootReducer;
