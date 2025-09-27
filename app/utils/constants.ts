import { JSX } from "react";

export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
export const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const upcomingAppointments = [
  {
    id: "1",
    providerName: "Mike Johnson",
    service: "Plumbing",
    date: "Today",
    time: "2:00 PM",
    status: "confirmed" as const,
  },
  {
    id: "2",
    providerName: "Sarah Wilson",
    service: "Electrical",
    date: "Tomorrow",
    time: "10:00 AM",
    status: "pending" as const,
  },
];

export const favoriteProviders = [
  { id: "1", name: "Mike Johnson", service: "Plumbing", rating: 4.9 },
  { id: "2", name: "David Chen", service: "Carpentry", rating: 4.7 },
];

export const todayAppointments = [
  {
    id: "1",
    customerName: "John Smith",
    service: "Kitchen Sink Repair",
    time: "9:00 AM",
    status: "confirmed" as const,
  },
  {
    id: "2",
    customerName: "Lisa Johnson",
    service: "Bathroom Installation",
    time: "2:00 PM",
    status: "pending" as const,
  },
];

export const services = [
  {
    id: "1",
    name: "Plumber",
    icon: "Wrench",
    description: "Expert plumbing services",
  },
  {
    id: "2",
    name: "Electrician",
    icon: "Zap",
    description: "Professional electrical work",
  },
  {
    id: "3",
    name: "Carpenter",
    icon: "Hammer",
    description: "Custom woodwork and repairs",
  },
  {
    id: "4",
    name: "Mechanic",
    icon: "Settings",
    description: "Auto repair and maintenance",
  },
  {
    id: "5",
    name: "Tech Support",
    icon: "Monitor",
    description: "Computer and device help",
  },
  {
    id: "6",
    name: "House Painter",
    icon: "Paintbrush",
    description: "Interior and exterior painting",
  },
];

export const featuredProviders = [
  {
    id: "1",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "provider",
    skills: ["Plumbing", "Pipe Repair"],
    hourlyRate: 85,
    rating: 4.9,
    totalReviews: 127,
    location: "Downtown",
    bio: "Licensed plumber with 15 years of experience",
    availability: {},
    isActive: true,
    totalBookings: 234,
    totalClients: 89,
    hoursWorked: 1250,
    revenue: 45800,
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1 (555) 987-6543",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "provider",
    skills: ["Electrical", "Wiring"],
    hourlyRate: 90,
    rating: 4.8,
    totalReviews: 89,
    location: "Northside",
    bio: "Certified electrician specializing in residential work",
    availability: {},
    isActive: true,
    totalBookings: 156,
    totalClients: 67,
    hoursWorked: 980,
    revenue: 38200,
    createdAt: new Date("2023-03-20"),
  },
  {
    id: "3",
    name: "David Chen",
    email: "david@example.com",
    phone: "+1 (555) 456-7890",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "provider",
    skills: ["Carpentry", "Furniture"],
    hourlyRate: 75,
    rating: 4.7,
    totalReviews: 203,
    location: "Eastside",
    bio: "Master carpenter with custom furniture expertise",
    availability: {},
    isActive: true,
    totalBookings: 298,
    totalClients: 112,
    hoursWorked: 1560,
    revenue: 52400,
    createdAt: new Date("2022-11-08"),
  },
];

export const reviews = [
  {
    id: "1",
    customerId: "1",
    providerId: "1",
    rating: 5,
    comment:
      "Mike did an excellent job fixing our kitchen pipes. Very professional and clean work!",
    date: new Date("2024-01-10"),
    customerName: "Jennifer Smith",
  },
  {
    id: "2",
    customerId: "2",
    providerId: "2",
    rating: 5,
    comment:
      "Sarah installed new outlets in our home office. Great communication and fair pricing.",
    date: new Date("2024-01-08"),
    customerName: "Robert Johnson",
  },
  {
    id: "3",
    customerId: "3",
    providerId: "3",
    rating: 4,
    comment:
      "David built us a beautiful custom bookshelf. Highly recommend his carpentry work!",
    date: new Date("2024-01-05"),
    customerName: "Lisa Anderson",
  },
];
