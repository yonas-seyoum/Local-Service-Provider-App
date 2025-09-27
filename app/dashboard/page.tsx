"use client";

import React from "react";
import { useAuth } from "../context/AuthContext";
import { ServiceProvider } from "../types";
import ProviderDashboard from "../components/Dashboard/ProviderDashboard";
import CustomerProvider from "../components/Dashboard/CustomerDashboard";
import {
  todayAppointments,
  upcomingAppointments,
  favoriteProviders,
} from "../utils/constants";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const isProvider = currentUser?.type === "provider";
  const provider = isProvider ? (currentUser as ServiceProvider) : null;

  if (isProvider && provider) {
    return (
      <ProviderDashboard
        provider={provider}
        todayAppointments={todayAppointments}
      />
    );
  }

  return (
    <CustomerProvider
      upcomingAppointments={upcomingAppointments}
      favoriteProviders={favoriteProviders}
    />
  );
}
