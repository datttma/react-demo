import { getRandomInt } from "../../untils/randomInt";
import { TANG_GIAM } from "../constants/GameBauCuaConst";
const initialState = {
  tongTien: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
  ],
};
// hàm này nhận vào mặc định 2 tham số là state và action (state thì mình cho nó bằng với state khởi tạo luôn)
const GameBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG_GIAM:
      let { tongTien } = state;
      let danhSachCuoc = [...state.danhSachCuoc];
      let index = danhSachCuoc.findIndex((ele) => ele.ma === action.ma);
      if (index !== -1) {
        if (action.tangGiam) {
          //+
          if (tongTien > 0) {
            danhSachCuoc[index].giaCuoc += 10;
            tongTien -= 10;
          }
        } else {
          //-
          if (danhSachCuoc[index].giaCuoc > 0) {
            danhSachCuoc[index].giaCuoc -= 10;
            tongTien += 10;
          }
        }
      }
      // cú pháp này là tạo 1 cái object mới để react render lại, object này sẽ copy lại từ thằng state và thay đổi 1 số cái thuộc tính
      return { ...state, danhSachCuoc, tongTien };
    case "CHOI_GAME": {
      let danhSachCuoc = [...state.danhSachCuoc];
      // random ra 3 cái cục xúc xắc
      let xucXac = [
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
      ];
      // lấy những con cược ra
      danhSachCuoc = danhSachCuoc.filter((ele) => ele.giaCuoc > 0);

      // trả tiền cho người chơi
      let tongTien = state.tongTien;
      for (let ele of danhSachCuoc) {
        let traLaiTien = xucXac.find((item) => item.ma === ele.ma);
        if (traLaiTien) {
          tongTien += traLaiTien.giaCuoc;
        }
      }
      //trúng thưởng
      for (let ele of xucXac) {
        let trungThuong = danhSachCuoc.find((item) => item.ma === ele.ma);
        // console.log(trungThuong);
        if (trungThuong) {
          tongTien += trungThuong.giaCuoc;
        }
      }
      // reset tiền đặt cược lại 0. hàm map((item,index)=>({ viết kiểu này sẽ trả về 1 object}))
      let updateDanhSachCuoc = [...state.danhSachCuoc];
      updateDanhSachCuoc = updateDanhSachCuoc.map((ele) => ({
        ...ele,
        giaCuoc: 0,
      }));
      return { ...state, xucXac, tongTien, danhSachCuoc: updateDanhSachCuoc };
    }

    default:
      return { ...state };
      break;
  }
};
export default GameBauCuaReducer;
