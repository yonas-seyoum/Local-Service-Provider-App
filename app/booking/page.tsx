import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
export default function BookingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Complete Your Booking</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Service Provider Info */}
        <div className="flex items-center gap-4 pb-6 border-b border-black/10">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3"
            alt="Service Provider"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h2 className="font-semibold">John's Plumbing Services</h2>
            <p className="text-sm text-gray-600">Basic Plumbing Inspection</p>
            <p className="text-sm text-gray-600">$75/hour</p>
          </div>
        </div>
        {/* Booking Form */}
        <div className="space-y-6 mt-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Select Date
            </label>
            <input
              type="date"
              className="w-full border border-black/10 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Select Time
            </label>
            <select className="w-full border border-black/10 rounded-md px-3 py-2">
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Service Details
            </label>
            <textarea
              className="w-full border border-black/10 rounded-md px-3 py-2"
              rows={4}
              placeholder="Describe your service needs..."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Location</label>
            <input
              type="text"
              className="w-full border border-black/10 rounded-md px-3 py-2"
              placeholder="Enter your address"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            Confirm Booking
          </button>
        </div>
      </div>
    </main>
  );
}
