import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./layouts/Index";
import Error from "./components/Error";
import Dashboard from "./pages/Dashboard";
import Sale from "./pages/Sale";
import Invoices from "./pages/Invoices";
import AuthForm from "./pages/Auth/Authform";

const App = () => {
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
          element: <Sale />,
        },
        {
          path: "Invoices",
          element: <Invoices />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
