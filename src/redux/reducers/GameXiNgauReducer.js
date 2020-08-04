import { getRandomInt } from "../../untils/randomInt";
const danhSachXucXac = [
  { ma: "one", classes: "fa fa-dice-one", so: 1 },

  { ma: "two", classes: "fa fa-dice-two", so: 2 },

  { ma: "three", classes: "fa fa-dice-three", so: 3 },

  { ma: "four", classes: "fa fa-dice-four", so: 4 },

  { ma: "five", classes: "fa fa-dice-five", so: 5 },

  { ma: "six", classes: "fa fa-dice-six", so: 6 },
];
const initialState = {
  xucXac: [
    { ma: "four", classes: "fa fa-dice-four", so: 4 },

    { ma: "five", classes: "fa fa-dice-five", so: 5 },

    { ma: "six", classes: "fa fa-dice-six", so: 6 },
  ],
  taiXiu: false,
  soBanThang: 0,
  soBanChoi: 0,
};
const GameXiNgauReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "CHON_TAI_XIU": {
      return { ...state, taiXiu: actions.taiXiu };
    }
    case "CHOI_GAME": {
      // console.log("choi game");
      let soBanThang = state.soBanThang;
      let xucXac = [
        danhSachXucXac[getRandomInt(6)],
        danhSachXucXac[getRandomInt(6)],
        danhSachXucXac[getRandomInt(6)],
      ];
      let tong = xucXac[0].so + xucXac[1].so + xucXac[2].so;
      if (tong > 10 && state.taiXiu) {
        soBanThang += 1;
      }
      if (tong < 10 && state.taiXiu == false) {
        soBanThang += 1;
      }
      let soBanChoi = state.soBanChoi;
      soBanChoi += 1;
      return {
        ...state,
        xucXac: xucXac,
        soBanThang: soBanThang,
        soBanChoi: soBanChoi,
      };
    }
    default:
      return { ...state };
  }
};
export default GameXiNgauReducer;
