import React from "react";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <ul className="list-disc list-inside">
      {products.map((product) => (
        <li key={product.id} className="mb-1">
          {product.name}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
