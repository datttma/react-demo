// phải export ra thì mấy thằng khác mới import được
export function getRandomInt(max) {
  // hàm sẽ chạy từ 0 - max-1 (khoảng giữa từ 0-1 nên lớn nhất sẽ bằng max-1)
  return Math.floor(Math.random() * Math.floor(max));
}
