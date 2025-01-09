import React from "react";
import Button from "../components/Button";

const Products = ({ products }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-10">Products</h1>
        <Button path={"/dashboard"} />
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-200 py-4 px-6 rounded-md my-2 flex justify-between items-center"
        >
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-lg font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
