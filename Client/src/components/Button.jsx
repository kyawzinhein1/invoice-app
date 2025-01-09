import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ path }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2 ml-2"
        onClick={() => {
          navigate(path);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Button;
