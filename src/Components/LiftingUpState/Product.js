import React from "react";
//rfc react function component
export default function Product(props) {
  //nhận product từ bên examplecard truyền qua
  let { product, handleSelectPro, handleBuy } = props;
  return (
    <div className="card">
      <img className="card-img-top" src={product.hinhAnh} alt="asdsad" />
      <div className="card-body">
        <h4 className="card-title">{product.tenSP}</h4>
        <button
          className="btn btn-success"
          onClick={() => {
            handleSelectPro(product);
            // console.log(product);
          }}
        >
          Chi tiết
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            handleBuy(product);
          }}
        >
          Mua
        </button>
      </div>
    </div>
  );
}
