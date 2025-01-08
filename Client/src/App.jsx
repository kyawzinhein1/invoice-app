import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./layouts/Index";
import Error from "./components/Error";
import Dashboard from "./pages/Dashboard";
import Sale from "./pages/Sale";
import Invoices from "./pages/Invoices";
import AuthForm from "./pages/Auth/Authform";
import Products from "./pages/Products";
import fetchProducts from "./api/productApi";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts); // Set the fetched products
      } catch (error) {
        console.error("Error loading products:", error); // Handle any error
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    loadProducts();
  }, []);

  const handleSalesComplete = (sales) => {
    return sales;
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching products
  }

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
