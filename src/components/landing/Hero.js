import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black via-gym-black/70 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent z-0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gym-red font-bold tracking-wider uppercase text-sm mb-4 block">
              Premium Gym Management
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-red to-orange-500">Body</span>,<br />
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-red to-orange-500">Life</span>
            </h1>
            <p className="text-xl text-gym-lightgray mb-10 max-w-2xl">
              The ultimate fitness destination. Manage your memberships, track workouts, and achieve your goals with our state-of-the-art facilities and elite trainers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary flex items-center justify-center gap-2 text-lg">
                Join Now <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2 text-lg group">
                <Play className="w-5 h-5 text-gym-red group-hover:text-white transition-colors" />
                Explore Plans
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-gym-gray pt-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gym-lightgray text-sm mt-1">Expert Trainers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">2k+</h3>
              <p className="text-gym-lightgray text-sm mt-1">Active Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="text-gym-lightgray text-sm mt-1">Modern Equipments</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
