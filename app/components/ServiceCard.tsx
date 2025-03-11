import React from "react";
import { Star, MapPin, Clock } from "lucide-react";
import Link from "next/link";
export function ServiceCard() {
  return (
    <Link href="/provider/1" className="block">
      <div className="border border-black/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3"
          alt="Service Provider"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">John's Plumbing Services</h3>
            <div className="flex items-center">
              <Star className="text-yellow-400 fill-current" size={16} />
              <span className="ml-1 text-sm">4.8</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Professional plumbing services with 15+ years of experience
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin size={16} className="mr-1" />
            <span>Chicago, IL</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            <span>Available Today</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-600 font-semibold">$75/hour</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
