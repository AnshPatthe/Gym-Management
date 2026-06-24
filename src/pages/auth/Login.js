import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Dumbbell, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, handle authentication here.
    // For now, redirect to dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gym-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black via-gym-black/80 to-transparent z-0"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10 p-8 sm:p-10 glass-card mx-4"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gym-red p-3 rounded-full mb-4 shadow-lg shadow-gym-red/20">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-gym-lightgray mt-2 text-center text-sm">
            Sign in to access your gym dashboard and crush your goals.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gym-lightgray block">Email or Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gym-lightgray" />
              </div>
              <input
                type="email"
                required
                className="input-field pl-10"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gym-lightgray block">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gym-lightgray" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="input-field pl-10 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gym-lightgray hover:text-white transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-gym-lightgray hover:text-white transition-colors" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gym-gray bg-gym-black text-gym-red focus:ring-gym-red focus:ring-offset-gym-black"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gym-lightgray">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-gym-red hover:text-gym-darkred transition-colors">
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full btn-primary flex justify-center py-3">
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gym-lightgray">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-gym-red hover:text-white transition-colors">
              Join Now
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
