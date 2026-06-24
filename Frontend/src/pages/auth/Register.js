import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  ShieldCheck
} from 'lucide-react';

import api from "../../utils/axiosInstance";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password
      });

      alert("Registration Successful");
      navigate("/login");

    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gym-black py-10">

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black/90 via-gym-black/80 to-gym-black/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl z-10 p-8 sm:p-10 glass-card mx-4 my-8"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gym-red p-3 rounded-full mb-4">
            {/* <Dumbbell className="w-8 h-8 text-white" /> */}
          </div>

          <h2 className="text-3xl font-bold text-white">
            Join the Elite
          </h2>

          <p className="text-gym-lightgray mt-2 text-center text-sm">
            Create your account and start your fitness journey today.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Full Name
              </label>

              <div className="relative">
                {/* <User className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Email
              </label>

              <div className="relative">
                {/* <Mail className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Phone
              </label>

              <div className="relative">
                {/* <Phone className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                />
              </div>
            </div>

            {/* DOB */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Date of Birth
              </label>

              <div className="relative">
                {/* <Calendar className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Plan */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Membership Plan
              </label>

              <div className="relative">
                {/* <ShieldCheck className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="input-field pl-10"
                >
                  <option value="basic">Basic Plan</option>
                  <option value="standard">Standard Plan</option>
                  <option value="premium">Premium Plan</option>
                  <option value="elite">Elite Plan</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Password
              </label>

              <div className="relative">
                {/* <Lock className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gym-lightgray">
                Confirm Password
              </label>

              <div className="relative">
                {/* <Lock className="absolute left-3 top-3 h-5 w-5 text-gym-lightgray" /> */}

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                />
              </div>
            </div>

          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3"
          >
            Complete Registration
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-gym-red hover:text-white"
          >
            Already have an account? Sign In
          </Link>
        </div>

      </motion.div>
    </div>
  );
}