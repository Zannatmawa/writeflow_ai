"use client"
import Image from "next/image";
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/ui/HeroSection'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-10 mt-10">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
