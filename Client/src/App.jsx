import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./layouts/Index";
import Error from "./components/Error";
import Dashboard from "./pages/Dashboard";
import Sale from "./pages/Sale";
import Invoices from "./pages/Invoices";
import AuthForm from "./pages/Auth/Authform";
import Products from "./pages/Products";

const App = () => {
  const products = [
    { id: 1, name: "Apple", price: 1200 },
    { id: 2, name: "Banana", price: 300 },
    { id: 3, name: "Orange", price: 500 },
    { id: 4, name: "Milk", price: 2000 },
    { id: 5, name: "Bread", price: 800 },
    { id: 6, name: "Eggs", price: 400 },
    { id: 7, name: "Cheese", price: 2500 },
    { id: 8, name: "Coffee", price: 10000 },
    { id: 9, name: "Tea", price: 12000 },
    { id: 10, name: "Butter", price: 3000 },
  ];

  const handleSalesComplete = (sales) => {
    // console.log('Sales completed:', sales);
    return sales;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <AuthForm />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/sale",
          element: (
            <Sale products={products} onSalesComplete={handleSalesComplete} />
          ),
        },
        {
          path: "invoice",
          element: <Invoices />,
        },
        {
          path: "products",
          element: <Products products={products} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
