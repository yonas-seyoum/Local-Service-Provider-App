"use client";

import React, { useState } from "react";
import { Search, MapPin, Star, Filter } from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";
import { SearchFilters } from "./components/SearchFilters";
import { CategoryGrid } from "./components/CategoryGrid";
import { FilterPanel } from "./components/FilterPanel";
import { Header } from "./components/Header";
export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8  ">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Trusted Local Service Providers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with qualified professionals in your area
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full pl-10 pr-4 py-2 bg-white border border-black/10 rounded-lg"
              />
            </div>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-48 pl-10 pr-4 py-2 border border-black/10 bg-white rounded-lg"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Services</h2>
          <CategoryGrid />
        </section>
        {/* Service Providers Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Top Service Providers</h2>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>
          <SearchFilters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </section>
        {/* Filter Panel */}
        <FilterPanel
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      </main>
    </>
  );
}
