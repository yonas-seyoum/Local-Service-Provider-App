"use client";

import {
  Settings,
  Save,
  Camera,
  Star,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ServiceProvider } from "../types";

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Review {
  id: string;
  customerId: string;
  providerId: string;
  rating: number;
  comment: string;
  date: Date;
  customerName: string;
}

export default function Profile() {
  const { currentUser: user } = useAuth();
  const isProvider = user?.type === "provider";
  const provider = isProvider ? (user as ServiceProvider) : null;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone || "",
    location: provider?.location || "",
    // skills: [provider?.skills.join(", ") || ""],
    hourlyRate: provider?.hourlyRate.toString() || "",
    bio: provider?.bio || "",
    isActive: provider?.isActive ?? true,
  });

  const [availability, setAvailability] = useState({
    monday: { start: "09:00", end: "17:00", available: true },
    tuesday: { start: "09:00", end: "17:00", available: true },
    wednesday: { start: "09:00", end: "17:00", available: true },
    thursday: { start: "09:00", end: "17:00", available: true },
    friday: { start: "09:00", end: "17:00", available: true },
    saturday: { start: "10:00", end: "16:00", available: false },
    sunday: { start: "10:00", end: "16:00", available: false },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvailabilityChange = (
    day: string,
    field: string,
    value: string | boolean
  ) => {
    setAvailability({
      ...availability,
      [day]: {
        ...availability[day as keyof typeof availability],
        [field]: value,
      },
    });
  };

  const handleSave = () => {
    // const updatedUser: UserType = {
    //   ...user,
    //   name: formData.name,
    //   email: formData.email,
    //   phone: formData.phone,
    //   ...(isProvider && {
    //     location: formData.location,
    //     skills: formData.skills
    //       .split(",")
    //       .map((s) => s.trim())
    //       .filter((s) => s),
    //     hourlyRate: parseInt(formData.hourlyRate) || 0,
    //     bio: formData.bio,
    //     isActive: formData.isActive,
    //   }),
    // };

    // onUserUpdate(updatedUser);
    setIsEditing(false);
  };
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            ) : (
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={
                      user?.avatar ||
                      `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop`
                    }
                    alt={user?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  {user?.name}
                </h2>
                <p className="text-gray-600 capitalize">{user?.type}</p>

                {isProvider && provider && (
                  <>
                    <div className="flex items-center justify-center mt-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium text-gray-900">
                        {provider.rating}
                      </span>
                      <span className="ml-1 text-gray-600">
                        ({provider.totalReviews} reviews)
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-center">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          provider.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {provider.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{user?.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">{user?.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">
                          {user?.phone || "Not provided"}
                        </span>
                      </div>
                    )}
                  </div>

                  {isProvider && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-900">
                            {provider?.location}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Details (Provider Only) */}
            {isProvider && provider && (
              <>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Professional Details
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Skills/Services
                        </label>
                        {/* {isEditing ? (
                          <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            placeholder="e.g., Plumbing, Pipe Repair"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {provider.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )} */}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hourly Rate ($)
                        </label>
                        {isEditing ? (
                          <input
                            type="number"
                            name="hourlyRate"
                            value={formData.hourlyRate}
                            onChange={handleInputChange}
                            min="10"
                            max="500"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <div className="p-3 bg-gray-50 rounded-xl">
                            <span className="text-xl font-semibold text-gray-900">
                              ${provider.hourlyRate}/hr
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Bio
                      </label>
                      {isEditing ? (
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-xl">
                          <p className="text-gray-900">{provider.bio}</p>
                        </div>
                      )}
                    </div>

                    {isEditing && (
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Profile Status
                          </h4>
                          <p className="text-sm text-gray-600">
                            Make your profile visible to customers
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-700">
                            {formData.isActive ? "Active" : "Inactive"}
                          </span>
                          <button
                            onClick={() =>
                              setFormData({
                                ...formData,
                                isActive: !formData.isActive,
                              })
                            }
                            className={`w-12 h-6 rounded-full transition-colors ${
                              formData.isActive ? "bg-green-500" : "bg-gray-300"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                formData.isActive
                                  ? "translate-x-6"
                                  : "translate-x-0.5"
                              }`}
                            ></div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Availability
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {days.map((day, index) => (
                      <div
                        key={day}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center space-x-4">
                          {isEditing ? (
                            <input
                              type="checkbox"
                              checked={
                                availability[day as keyof typeof availability]
                                  .available
                              }
                              onChange={(e) =>
                                handleAvailabilityChange(
                                  day,
                                  "available",
                                  e.target.checked
                                )
                              }
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                          ) : (
                            <div
                              className={`w-4 h-4 rounded ${
                                availability[day as keyof typeof availability]
                                  .available
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            ></div>
                          )}
                          <span className="font-medium text-gray-900 w-20">
                            {dayNames[index]}
                          </span>
                        </div>

                        <div className="flex items-center space-x-4">
                          {isEditing &&
                          availability[day as keyof typeof availability]
                            .available ? (
                            <>
                              <input
                                type="time"
                                value={
                                  availability[day as keyof typeof availability]
                                    .start
                                }
                                onChange={(e) =>
                                  handleAvailabilityChange(
                                    day,
                                    "start",
                                    e.target.value
                                  )
                                }
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                              <span className="text-gray-500">to</span>
                              <input
                                type="time"
                                value={
                                  availability[day as keyof typeof availability]
                                    .end
                                }
                                onChange={(e) =>
                                  handleAvailabilityChange(
                                    day,
                                    "end",
                                    e.target.value
                                  )
                                }
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                            </>
                          ) : availability[day as keyof typeof availability]
                              .available ? (
                            <span className="text-gray-700">
                              {
                                availability[day as keyof typeof availability]
                                  .start
                              }{" "}
                              -{" "}
                              {
                                availability[day as keyof typeof availability]
                                  .end
                              }
                            </span>
                          ) : (
                            <span className="text-gray-500">Unavailable</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
