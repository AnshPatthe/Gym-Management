import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, User, Mail, Phone, Calendar, Lock, ShieldCheck } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: 'male',
    dob: '',
    plan: 'standard',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gym-black py-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black/90 via-gym-black/80 to-gym-black/60 z-0"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl z-10 p-8 sm:p-10 glass-card mx-4 my-8"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gym-red p-3 rounded-full mb-4 shadow-lg shadow-gym-red/20">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Join the Elite</h2>
          <p className="text-gym-lightgray mt-2 text-center text-sm">
            Create your account and start your fitness journey today.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gym-lightgray" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="input-field pl-10"
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gym-lightgray" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="input-field pl-10"
                  placeholder="john@example.com"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gym-lightgray" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="input-field pl-10"
                  placeholder="+1 (555) 000-0000"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Date of Birth</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gym-lightgray" />
                </div>
                <input
                  type="date"
                  name="dob"
                  required
                  className="input-field pl-10 text-white [color-scheme:dark]"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Gender</label>
              <select 
                name="gender" 
                className="input-field appearance-none" 
                onChange={handleChange}
                defaultValue="male"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Membership Plan Selection */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Membership Plan</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShieldCheck className="h-5 w-5 text-gym-lightgray" />
                </div>
                <select 
                  name="plan" 
                  className="input-field pl-10 appearance-none" 
                  onChange={handleChange}
                  defaultValue="standard"
                >
                  <option value="basic">Basic Plan ($29/mo)</option>
                  <option value="standard">Standard Plan ($49/mo)</option>
                  <option value="premium">Premium Plan ($79/mo)</option>
                  <option value="elite">Elite Plan ($129/mo)</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gym-lightgray" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  className="input-field pl-10"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gym-lightgray block">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gym-lightgray" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="input-field pl-10"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full btn-primary flex justify-center py-3 text-lg">
              Complete Registration
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm border-t border-gym-gray pt-6">
          <p className="text-gym-lightgray">
            Already a member?{' '}
            <Link to="/login" className="font-medium text-gym-red hover:text-white transition-colors">
              Sign In Here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
