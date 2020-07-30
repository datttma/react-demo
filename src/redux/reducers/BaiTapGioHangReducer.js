//thay vì khai báo state ở component ta khai báo tại reducer
const stateDefault = {
  spChiTiet: {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: 'AMOLED, 6.2", Full HD+',
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
};
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XEM_CHI_TIET":
      {
        //nó sẽ trả về state mới và render lại , dạng như setState mình tự viết
        return { ...state, spChiTiet: action.sanPham };
      }

      break;

    default:
      return { ...state };
  }
};
export default BaiTapGioHangReducer;
