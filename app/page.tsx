"use client";

import React from "react";
import CTX from "./components/Landing/CTX";
import FeaturedProviders from "./components/Landing/FeaturedProviders";
import Hero from "./components/Landing/Hero";
import PopularServices from "./components/Landing/PopularServices";
import Testimonial from "./components/Landing/Testimonial";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PopularServices />
      <FeaturedProviders />
      <Testimonial />
      <CTX />
    </div>
  );
}
