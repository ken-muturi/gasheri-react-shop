import React, { useEffect, useState } from "react";
import Product from "./Product";
const apiUrL = "http://localhost:3000/api";
const chunkArray = (array, size = 4) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${apiUrL}/products`).then((res) => res.json());
      setProducts(data);
    };

    fetchData();
  }, []);

  const productChuncks = chunkArray(products, 4);
  return (
    <div>
      {productChuncks.map((prds) => {
        return (
          <div className="d-flex">
            {prds.map((prd) => (
              <Product key={prd} product={prd} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
