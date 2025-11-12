import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-cyan-600 transition overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h5 className="text-glow-cyan font-dark text-xl mb-1">{product.title}</h5>
      <p className="text-gray-400 text-sm mb-3">{product.desc}</p>
      <button className="font-dark bg-cyan-600 text-white px-4 py-1 rounded-full shadow-md hover:bg-cyan-500 hover:scale-105 hover:shadow-cyan-400 transition">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
