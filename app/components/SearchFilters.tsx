import React from "react";
export function SearchFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select className="border border-black/10 rounded-md px-3 py-2 bg-white">
        <option>Service Type</option>
        <option>Plumbing</option>
        <option>Electrical</option>
        <option>Carpentry</option>
      </select>
      <select className="border border-black/10 rounded-md px-3 py-2 bg-white">
        <option>Rating</option>
        <option>4+ Stars</option>
        <option>3+ Stars</option>
        <option>All Ratings</option>
      </select>
      <select className="border border-black/10 rounded-md px-3 py-2 bg-white">
        <option>Availability</option>
        <option>Available Today</option>
        <option>Available This Week</option>
        <option>All</option>
      </select>
      <select className="border border-black/10 rounded-md px-3 py-2 bg-white">
        <option>Price Range</option>
        <option>$0-50/hr</option>
        <option>$50-100/hr</option>
        <option>$100+/hr</option>
      </select>
    </div>
  );
}
