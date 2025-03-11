import React from "react";
import {
  Wrench,
  Zap,
  Car,
  Home,
  Scissors,
  Laptop,
  PaintbrushIcon,
  Bed,
} from "lucide-react";
export function CategoryGrid() {
  const categories = [
    {
      icon: <Wrench size={24} />,
      name: "Plumbing",
    },
    {
      icon: <Zap size={24} />,
      name: "Electrical",
    },
    {
      icon: <Bed size={25} />,
      name: "Carpentry",
    },
    {
      icon: <Car size={24} />,
      name: "Mechanics",
    },
    {
      icon: <PaintbrushIcon size={25} />,
      name: "Painting",
    },
    {
      icon: <Home size={24} />,
      name: "Home Repair",
    },
    {
      icon: <Scissors size={24} />,
      name: "Landscaping",
    },
    {
      icon: <Laptop size={24} />,
      name: "Tech Support",
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center p-6 border border-black/10 rounded-lg hover:shadow-md transition-shadow bg-white"
        >
          <div className="text-blue-600 mb-2">{category.icon}</div>
          <span className="text-gray-700">{category.name}</span>
        </button>
      ))}
    </div>
  );
}
