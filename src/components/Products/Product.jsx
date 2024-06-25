import React from "react";
import "./Product.css";

const Products = (props) => {
  const { product } = props;
  return (
    <div className="card w-300 m-3">
      <img src="/logo192.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.unit_price}</p>
        <a href="/" className="btn btn-primary">
          buy
        </a>
      </div>
    </div>
  );
};

export default Products;
