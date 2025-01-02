import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <Outlet />
    </div>
  );
};

export default Index;
