"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">
                ServiceFinder
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Find Services
            </Link>
            <Link
              href="/dashboard/customer"
              className="text-gray-700 hover:text-gray-900"
            >
              My Bookings
            </Link>
            <Link
              href="/dashboard/provider"
              className="text-gray-700 hover:text-gray-900"
            >
              For Providers
            </Link>
            <Link href={"/auth/signin"}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Find Services
              </Link>
              <Link
                href="/dashboard/customer"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                My Bookings
              </Link>
              <Link
                href="/dashboard/provider"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                For Providers
              </Link>
              <Link href={"/auth/signin"}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
