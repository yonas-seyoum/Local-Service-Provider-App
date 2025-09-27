
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  type: "customer" | "provider";
  createdAt?: Date;
}

export interface WeeklyAvailability {
  [key: string]: TimeSlot[];
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  customerId: string;
  providerId: string;
  serviceType: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  description: string;
  cost: number;
}

export interface ServiceProvider extends User {
  type: "provider";
  skills: string[];
  hourlyRate: number;
  rating: number;
  totalReviews: number;
  location: string;
  bio: string;
  certifications?: string[];
  availability: WeeklyAvailability;
  isActive: boolean;
  totalBookings: number;
  totalClients: number;
  hoursWorked: number;
  revenue: number;
}

export interface SignUpForm {
  name: string;
  email: string;
  password: string;
  phone: string;
  location: string;
  skills: string;
  hourlyRate: string;
  bio: string;
}