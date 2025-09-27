"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import MobileNavigation, { MobileMenu } from "./MobileNavigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const navItems = currentUser
    ? [
        { id: "home", label: "Home", route: "/" },
        { id: "dashboard", label: "Dashboard", route: "/dashboard" },
        { id: "profile", label: "Profile", route: "/profile" },
      ]
    : [
        { id: "home", label: "Home", route: "/" },
        { id: "login", label: "Sign In", route: "/auth/signin" },
        { id: "register", label: "Get Started", route: "/auth/register" },
      ];

  const { logout } = useAuth();
  const handleNavigationClick = (link: string) => {
    router.push(`/${link}`);
  };
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigationClick("/")}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              ServiceConnect
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-default ${
                  pathname === item.route
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {currentUser && (
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <img
                  src={
                    currentUser.avatar ||
                    `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop`
                  }
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
                <button
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </div>
            )}
          </nav>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
          />
        </div>

        {isMobileMenuOpen && (
          <MobileNavigation
            menutItems={navItems}
            setIsOpen={setIsMobileMenuOpen}
          />
        )}
      </div>
    </header>
  );
}
