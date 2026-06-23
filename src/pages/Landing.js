import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="bg-gym-black min-h-screen text-white overflow-x-hidden">
      {/* Navigation Bar (Simple for Landing) */}
      <nav className="absolute top-0 w-full z-50 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              GYM<span className="text-gym-red">PRO</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#features" className="hover:text-gym-red transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gym-red transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-gym-red transition-colors">Testimonials</a>
            <a href="/login" className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10">
              Sign In
            </a>
            <a href="/register" className="px-5 py-2 rounded-lg bg-gym-red hover:bg-gym-darkred transition-all">
              Join Now
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="pricing"><Pricing /></div>
        <div id="testimonials"><Testimonials /></div>
      </main>

      <Footer />
    </div>
  );
}
