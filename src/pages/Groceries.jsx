// src/pages/Groceries.jsx
import React from "react";

export default function Groceries() {
  const items = [
    { name: "Rice", img: "images/groceries/rice.jpg" },
    { name: "Cooking Oil", img: "images/groceries/oil.jpg" },
    { name: "Wheat Flour (Atta)", img: "images/groceries/flour.jpg" },
  ];

  // Your WhatsApp number (replace XXXXXXXXXX with your number)
  const phone = "919444741433";

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Groceries</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/10 p-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

            {/* Individual Buy Now Button */}
            <a
              href={`https://wa.me/${phone}?text=I want to buy ${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
