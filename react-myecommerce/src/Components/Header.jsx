import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 shadow-md sticky top-0 z-50 border-b border-gray-700">
      <h1 className="text-glow-cyan text-3xl font-dark font-bold">Adview </h1>
      <ul className="flex gap-4">
        {["Home", "Products", "Cart", "Contact"].map((item, idx) => (
          <li key={idx}>
            <a
              href="#"
              className="px-3 py-1 rounded-lg hover:bg-purple-800 hover:text-purple-300 transition font-dark"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
