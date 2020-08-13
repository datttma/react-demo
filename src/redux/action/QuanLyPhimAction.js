import { layDanhSachPhim } from "../constants/QuanLyPhimConst";
import axios from "axios";
//--------action async------
export const layDanhSachPhimAjax = () => {
  return (dispatch) => {
    axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "get",
    })
      .then((result) => {
        console.log(result.data);
        dispatch({
          type: layDanhSachPhim,
          danhSachPhim: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

// --------------action---------
// export const layDanhSachPhim = (danhSachPhim) => ({
//   type: layDanhSachPhim,
//   danhSachPhim,
// });
