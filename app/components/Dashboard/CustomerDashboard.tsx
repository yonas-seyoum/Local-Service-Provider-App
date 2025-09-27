"use client";

import { useAuth } from "@/app/context/AuthContext";
import { Calendar, Bell, Star } from "lucide-react";
import { useRouter } from "next/navigation";

interface FavouriteProvider {
  id: string;
  name: string;
  service: string;
  rating: number;
}

interface UpcomingAppointment {
  id: string;
  providerName: string;
  service: string;
  date: string;
  time: string;
  status: string;
}

interface CustomerProviderProps {
  upcomingAppointments: UpcomingAppointment[];
  favoriteProviders: FavouriteProvider[];
}

export default function CustomerProvider({
  upcomingAppointments,
  favoriteProviders,
}: CustomerProviderProps) {
  const { currentUser } = useAuth();
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Customer Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {currentUser?.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Upcoming Appointments
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {appointment.providerName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {appointment.service}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          appointment.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                      <div className="space-x-2">
                        <button className="text-sm text-blue-600 hover:text-blue-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-center pt-4">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Book New Service
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Mike Johnson confirmed your appointment for today at 2:00 PM
                  </p>
                  <p className="text-xs text-blue-600 mt-1">2 hours ago</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    Sarah Wilson is running 15 minutes late for tomorrow's
                    appointment
                  </p>
                  <p className="text-xs text-yellow-600 mt-1">1 day ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Favorite Providers
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {favoriteProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {provider.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {provider.service}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {provider.rating}
                      </span>
                    </div>
                  </div>
                ))}

                <button className="w-full text-center py-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All Providers
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Book a Service
                </button>
                <button
                  onClick={() => router.push("/profile")}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
