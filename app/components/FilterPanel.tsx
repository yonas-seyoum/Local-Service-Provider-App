"use client";

import React, { useState } from "react";
import {
  Filter,
  Star,
  Clock,
  MapPin,
  DollarSign,
  Award,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
type FilterSection = {
  title: string;
  isOpen: boolean;
};
export function FilterPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [sections, setSections] = useState<FilterSection[]>([
    {
      title: "Service Type",
      isOpen: true,
    },
    {
      title: "Price Range",
      isOpen: true,
    },
    {
      title: "Rating",
      isOpen: true,
    },
    {
      title: "Availability",
      isOpen: true,
    },
    {
      title: "Experience Level",
      isOpen: true,
    },
    {
      title: "Location",
      isOpen: true,
    },
  ]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const toggleSection = (index: number) => {
    setSections(
      sections.map((section, i) =>
        i === index
          ? {
              ...section,
              isOpen: !section.isOpen,
            }
          : section
      )
    );
  };
  const toggleFilter = (filter: string) => {
    setActiveFilters((current) =>
      current.includes(filter)
        ? current.filter((f) => f !== filter)
        : [...current, filter]
    );
  };
  return (
    <div
      className={`
      fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="px-4 py-6 border-b border-black/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} />
              <h2 className="text-xl font-semibold">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600"
                >
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="ml-2 hover:text-blue-800"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Filter Sections */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Service Type */}
            <div className="border-b border-black/10 pb-4">
              <button
                onClick={() => toggleSection(0)}
                className="flex items-center justify-between w-full mb-4"
              >
                <span className="font-medium">Service Type</span>
                {sections[0].isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {sections[0].isOpen && (
                <div className="space-y-2">
                  {[
                    "Plumbing",
                    "Electrical",
                    "Carpentry",
                    "Cleaning",
                    "Painting",
                    "HVAC",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600"
                        onChange={() => toggleFilter(service)}
                        checked={activeFilters.includes(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            {/* Price Range */}
            <div className="border-b border-black/10 pb-4">
              <button
                onClick={() => toggleSection(1)}
                className="flex items-center justify-between w-full mb-4"
              >
                <span className="font-medium">Price Range</span>
                {sections[1].isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {sections[1].isOpen && (
                <div className="space-y-4">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      className="w-full"
                      defaultValue="100"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span>$200+</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {["$0-50", "$50-100", "$100-150", "$150+"].map((range) => (
                      <button
                        key={range}
                        onClick={() => toggleFilter(range)}
                        className={`px-3 py-1 rounded-full text-sm border border-black/10
                          ${
                            activeFilters.includes(range)
                              ? "bg-blue-600 text-white border-blue-600"
                              : "border-gray-300 hover:border-blue-600"
                          }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Rating */}
            <div className="border-b border-black/10 pb-4">
              <button
                onClick={() => toggleSection(2)}
                className="flex items-center justify-between w-full mb-4"
              >
                <span className="font-medium">Rating</span>
                {sections[2].isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {sections[2].isOpen && (
                <div className="space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600"
                        onChange={() => toggleFilter(`${rating}+ Stars`)}
                        checked={activeFilters.includes(`${rating}+ Stars`)}
                      />
                      <span className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                        <span className="ml-1">& up</span>
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            {/* Availability */}
            <div className="border-b border-black/10 pb-4">
              <button
                onClick={() => toggleSection(3)}
                className="flex items-center justify-between w-full mb-4"
              >
                <span className="font-medium">Availability</span>
                {sections[3].isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {sections[3].isOpen && (
                <div className="space-y-2">
                  {[
                    "Available Today",
                    "Available This Week",
                    "Available Weekends",
                    "Available 24/7",
                  ].map((availability) => (
                    <label
                      key={availability}
                      className="flex items-center space-x-3"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600"
                        onChange={() => toggleFilter(availability)}
                        checked={activeFilters.includes(availability)}
                      />
                      <span>{availability}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            {/* Experience Level */}
            <div className="border-b border-black/10 pb-4">
              <button
                onClick={() => toggleSection(4)}
                className="flex items-center justify-between w-full mb-4"
              >
                <span className="font-medium">Experience Level</span>
                {sections[4].isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {sections[4].isOpen && (
                <div className="space-y-2">
                  {[
                    "Novice (1-3 years)",
                    "Intermediate (3-5 years)",
                    "Expert (5-10 years)",
                    "Master (10+ years)",
                  ].map((experience) => (
                    <label
                      key={experience}
                      className="flex items-center space-x-3"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600"
                        onChange={() => toggleFilter(experience)}
                        checked={activeFilters.includes(experience)}
                      />
                      <span>{experience}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            {/* Location */}
            <div className="pb-4">
              <button
                onClick={() => toggleSection(5)}
                className="flex items-center justify-between w-full mb-4"
              >
                <span className="font-medium">Location</span>
                {sections[5].isOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {sections[5].isOpen && (
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full pl-10 pr-4 py-2 border border-black/10 rounded-lg"
                    />
                  </div>
                  <div>
                    <select className="w-full border border-black/10 rounded-lg px-3 py-2">
                      <option>Within 5 miles</option>
                      <option>Within 10 miles</option>
                      <option>Within 20 miles</option>
                      <option>Within 50 miles</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="border-t border-black/10 p-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveFilters([])}
              className="flex-1 px-4 py-2 border border-black/10 rounded-lg hover:bg-gray-50"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
