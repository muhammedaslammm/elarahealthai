"use client";

import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <Aurora />
      {/* <Vision /> */}
    </main>
  );
}
