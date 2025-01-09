import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Breadcrumbs from "../components/Breadcrumbs";

const Sale = ({ products, onSalesComplete }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productSelections, setProductSelections] = useState([
    { productId: "", price: "", quantity: 1 },
  ]);
  const navigate = useNavigate();

  const handleProductChange = (index, productId) => {
    const selectedProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    const updatedSelections = [...productSelections];
    updatedSelections[index].productId = productId;
    updatedSelections[index].price = selectedProduct
      ? selectedProduct.price
      : "";
    setProductSelections(updatedSelections);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedSelections = [...productSelections];
    updatedSelections[index].quantity = parseInt(quantity) || 1;
    setProductSelections(updatedSelections);
  };

  const addProductRow = () => {
    setProductSelections([
      ...productSelections,
      { productId: "", price: "", quantity: 1 },
    ]);
  };

  const handleCheckout = () => {
    const sales = productSelections
      .filter((selection) => selection.productId)
      .map((selection) => {
        const product = products.find(
          (product) => product.id === parseInt(selection.productId)
        );
        return {
          product: product.name,
          price: selection.price,
          quantity: selection.quantity,
          total: selection.price * selection.quantity,
        };
      });
    setSelectedProducts(sales);
    if (onSalesComplete) onSalesComplete(sales);
  };

  const handleInvoice = () => {
    // Pass selectedProducts using navigate
    navigate("/invoice", { state: { sales: selectedProducts } });
  };

  const breadcrumbLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Sale"},
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-10">Sales</h1>
        <Button path={"/dashboard"} />
      </div>
      <div className="mb-4">
        <Breadcrumbs links={breadcrumbLinks} />
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-400">Product</th>
              <th className="border border-gray-400">Price</th>
              <th className="border border-gray-400">Quantity</th>
              <th className="border border-gray-400">Total</th>
            </tr>
          </thead>
          <tbody>
            {productSelections.map((selection, index) => (
              <tr key={index}>
                <td className="border border-gray-400">
                  <select
                    value={selection.productId}
                    onChange={(e) => handleProductChange(index, e.target.value)}
                    className="w-full p-2 border"
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-400">
                  <input
                    type="number"
                    value={selection.price}
                    readOnly
                    className="w-full p-2 border bg-gray-100"
                  />
                </td>
                <td className="border border-gray-400">
                  <input
                    type="number"
                    value={selection.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                    className="w-full p-2 border"
                  />
                </td>
                <td className="border border-gray-400">
                  {(selection.price * selection.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addProductRow}
          className="bg-green-500 text-white p-2 rounded mt-2"
        >
          Add Product
        </button>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white p-2 rounded mt-2 ml-2"
        >
          Checkout
        </button>
      </div>
      {selectedProducts.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Selected Products</h2>
          <ul>
            {selectedProducts.map((item, index) => (
              <li key={index} className="p-2 border-b">
                {item.product} - {item.quantity} × ${item.price.toFixed(2)} = $
                {item.total.toFixed(2)}
              </li>
            ))}
          </ul>
          <button
            onClick={handleInvoice}
            className="bg-blue-500 text-white p-2 rounded mt-2 ml-2"
          >
            Create Invoice
          </button>
        </div>
      )}
    </div>
  );
};

export default Sale;
