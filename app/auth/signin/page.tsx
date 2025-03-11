import React from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { AuthLayout } from "@/app/components/AuthLayout";
export default function SignIn() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome Back</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 border border-black/10 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 border border-black/10  rounded-lg"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="w-full px-4 py-2 border border-black/10  rounded-lg hover:bg-gray-50 flex items-center justify-center">
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Google
            </button>
            <button className="w-full px-4 py-2 border border-black/10  rounded-lg hover:bg-gray-50 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Facebook
            </button>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            href="/auth/register/provider"
            className="block w-full px-4 py-3 border-2 border-blue-600 rounded-lg text-center hover:bg-blue-50"
          >
            <span className="flex items-center justify-center">
              Create Service Provider Account
              <ArrowRight size={20} className="ml-2" />
            </span>
          </Link>
          <Link
            href="/auth/register/user"
            className="block w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-center hover:bg-gray-50"
          >
            <span className="flex items-center justify-center">
              Create User Account
              <ArrowRight size={20} className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
