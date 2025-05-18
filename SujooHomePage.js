import React from "react";

export default function SujooHomePage() {
  const categories = [
    { icon: "⬜", label: "All" },
    { icon: "☀️", label: "Summer" },
    { icon: "📱", label: "Electronics" },
    { icon: "💄", label: "Beauty" },
    { icon: "🧸", label: "Kids" },
  ];

  const products = [
    {
      title: "Drinks & Juices",
      image: "https://via.placeholder.com/100x100?text=Juices",
      more: 98,
    },
    {
      title: "Ice Creams & Frozen",
      image: "https://via.placeholder.com/100x100?text=Ice+Creams",
      more: 17,
    },
    {
      title: "Chips & Namkeen",
      image: "https://via.placeholder.com/100x100?text=Snacks",
      more: 223,
    },
    {
      title: "Dairy, Bread & Eggs",
      image: "https://via.placeholder.com/100x100?text=Dairy",
      more: 99,
    },
    {
      title: "Vegetables & Fruits",
      image: "https://via.placeholder.com/100x100?text=Veggies",
      more: 132,
    },
    {
      title: "Bakery & Biscuits",
      image: "https://via.placeholder.com/100x100?text=Bakery",
      more: 132,
    },
  ];

  return (
    <div className="p-4 bg-lime-50 min-h-screen text-green-800">
      <h1 className="text-3xl font-bold mb-1">SujOo</h1>
      <p className="text-sm mb-4">Your Grocery, Your Time</p>

      <div className="mb-2 text-sm">
        <strong>10 minutes</strong>
        <div className="text-xs">Sant sena Nagar Datta Mandir, Dhule</div>
      </div>

      <input
        type="text"
        placeholder="Search 'milk'"
        className="w-full p-2 mb-4 rounded border border-gray-300"
      />

      <div className="flex space-x-4 overflow-auto mb-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-sm text-center px-2"
          >
            <div className="text-2xl">{cat.icon}</div>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Bestsellers</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded p-2 shadow text-center"
          >
            <img src={product.image} alt={product.title} className="mx-auto mb-2" />
            <p className="text-sm font-medium">{product.title}</p>
            <p className="text-xs text-gray-500">+{product.more} more</p>
          </div>
        ))}
      </div>
    </div>
  );
}
