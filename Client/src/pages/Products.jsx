import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="flex flex-reverse justify-center">
            <div
              key={product.id}
              className="w-32 mx-auto my-2 p-2 border border-gray-300 bg-gray-300 rounded-md"
            >
              <h3>Name - {product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
