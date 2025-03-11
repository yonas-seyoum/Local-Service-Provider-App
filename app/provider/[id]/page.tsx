import React from "react";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Calendar,
  Image,
} from "lucide-react";
import { Header } from "@/app/components/Header";
export default function ServiceProviderProfile() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start gap-6">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3"
                  alt="John Smith"
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold mb-2">
                    John's Plumbing Services
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                      <span className="ml-1">4.8 (156 reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>Chicago, IL</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>Available Today</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Professional plumbing services with over 15 years of
                    experience. Specializing in residential and commercial
                    plumbing repairs, installations, and maintenance.
                  </p>
                </div>
              </div>
            </div>
            {/* Services & Pricing */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Services & Pricing</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-black/10">
                  <span>Basic Plumbing Inspection</span>
                  <span className="font-semibold">$75/hour</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/10">
                  <span>Pipe Repair/Replacement</span>
                  <span className="font-semibold">$95/hour</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/10">
                  <span>Water Heater Installation</span>
                  <span className="font-semibold">$250+</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 border-black/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className={`${
                              index < 4 ? "text-yellow-400" : "text-gray-300"
                            } fill-current`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">2 days ago</span>
                    </div>
                    <p className="text-gray-600">
                      Great service! John was professional, punctual, and solved
                      our plumbing issue quickly. Would definitely recommend.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">
                Book an Appointment
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-black/10 rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-black/10 rounded-md px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Service Type
                  </label>
                  <select className="w-full border border-black/10 rounded-md px-3 py-2">
                    <option>Basic Plumbing Inspection</option>
                    <option>Pipe Repair/Replacement</option>
                    <option>Water Heater Installation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full border border-black/10 rounded-md px-3 py-2"
                    rows={4}
                    placeholder="Describe your service needs..."
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Request Booking
                </button>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                    <Phone size={20} />
                    <span>Call</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                    <Mail size={20} />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
