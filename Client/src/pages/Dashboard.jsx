import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Dashboard = () => {
  const breadcrumbLinks = [{ label: "Dashboard" }];

  return (
    <div>
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold my-10">Dashboard</h1>
          <Breadcrumbs links={breadcrumbLinks} />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Link to="/sale">
            <div className="bg-gray-200 py-8 rounded-md">
              <p className="text-center text-lg font-semibold">Sale</p>
            </div>
          </Link>
          <Link to="/products">
            <div className="bg-gray-200 py-8 rounded-md">
              <p className="text-center text-lg font-semibold">Products</p>
            </div>
          </Link>
          <Link to="/">
            <div className="bg-gray-200 py-8 rounded-md">
              <p className="text-center text-lg font-semibold">Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
