"use client";

import { Open_Sans } from "next/font/google";
import Navbar from "./landing/components/layout/Navbar";
import Hero from "./landing/components/sections/Hero";
import Clients from "./landing/components/sections/Clients";
import Footer from "./landing/components/layout/Footer";
import BackgroundEffects from "./landing/components/sections/BackgroundEffects";

const openSans = Open_Sans({
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export default function LandingPage() {
  return (
    <main className={`relative min-h-screen ${openSans.variable} font-sans`}>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Clients />
      <Footer />
    </main>
  );
}
