import React from "react";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import { Header } from "@/app/components/Header";
export default function ProviderDashboard() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Provider Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Update Availability
          </button>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            {
              icon: <Calendar size={20} />,
              label: "Today's Bookings",
              value: "5",
            },
            {
              icon: <Users size={20} />,
              label: "Total Clients",
              value: "128",
            },
            {
              icon: <Clock size={20} />,
              label: "Hours Worked",
              value: "180h",
            },
            {
              icon: <DollarSign size={20} />,
              label: "Revenue",
              value: "$2,400",
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center text-blue-600 mb-2">
                {stat.icon}
                <span className="ml-2 text-sm text-gray-600">{stat.label}</span>
              </div>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((booking) => (
              <div
                key={booking}
                className="border border-black/10 rounded-lg p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">John Smith</h3>
                    <div className="text-sm text-gray-600 mt-1 space-y-1">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>2:00 PM</span>
                      </div>
                      <div>Service: Plumbing Inspection</div>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <button className="text-green-600 text-sm hover:text-green-700">
                      Accept
                    </button>
                    <button className="text-red-600 text-sm hover:text-red-700">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
