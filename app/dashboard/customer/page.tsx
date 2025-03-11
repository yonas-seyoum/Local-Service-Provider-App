import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Header } from "@/app/components/Header";
export default function Customer() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
        <div className="grid gap-6">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Upcoming Appointments
            </h2>
            <div className="space-y-4">
              {[1, 2].map((booking) => (
                <div
                  key={booking}
                  className="border border-black/10 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">
                        John's Plumbing Services
                      </h3>
                      <div className="text-sm text-gray-600 mt-1 space-y-1">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>Thursday, July 20, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          <span>2:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>Chicago, IL</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-red-600 text-sm hover:text-red-700">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Past Appointments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((booking) => (
                <div
                  key={booking}
                  className="border border-black/10 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">
                        Mike's Electrical Services
                      </h3>
                      <div className="text-sm text-gray-600 mt-1 space-y-1">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>June 15, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          <span>11:00 AM</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Book Again
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
