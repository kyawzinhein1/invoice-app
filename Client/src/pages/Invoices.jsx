import { useLocation, useNavigate } from "react-router-dom";

const Invoice = () => {
  const { state } = useLocation();
  const { sales } = state || {}; // The selected products
  const navigate = useNavigate();

  const totalAmount = sales.reduce((acc, item) => acc + item.total, 0);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-center font-bold my-10">Invoice</h1>
        <button
          className="bg-blue-500 text-white p-2 rounded mt-2 ml-2"
          onClick={() => {
            navigate("/sale");
          }}
        >
          Back to Sale
        </button>
      </div>
      {sales && sales.length > 0 ? (
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((item, index) => (
              <tr key={index}>
                <td className="border p-2 text-center">{item.product}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-center">${item.price}</td>
                <td className="border p-2 text-center">
                  ${item.total.toFixed(2)}
                </td>
              </tr>
            ))}

            <tr>
              <td
                colSpan="3"
                className="border p-2 text-right font-bold text-red-500"
              >
                Total Amount:
              </td>
              <td className="border p-2 text-green-500 font-bold text-center text-xl">
                ${totalAmount}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No sales data available</p>
      )}
      <hr />
      <div className="flex justify-end mt-4">
        <button className="bg-green-500 text-white p-2 rounded mt-2 ml-2">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Invoice;
