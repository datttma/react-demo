import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import GameBauCuaReducer from "./GameBauCuaReducer";
const rootReducer = combineReducers({
  //nơi khai báo các state theo từng nghiệp vụ
  stateBaiTapGioHang: BaiTapGioHangReducer,
  // GameBauCuaReducer:GameBauCuaReducer ghi cách này cũng được nhưng dài , ghi ngắn hơn sẽ như ở dưới
  GameBauCuaReducer,
});
export default rootReducer;
