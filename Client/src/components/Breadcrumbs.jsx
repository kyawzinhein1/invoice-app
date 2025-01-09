import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ links }) => {
  return (
    <nav className="text-sm font-medium text-gray-500">
      <ol className="flex items-center">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {link.href ? (
              <Link
                to={link.href}
              >
                {link.label}
              </Link>
            ) : (
              <span className="text-gray-700">{link.label}</span>
            )}
            {index < links.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
