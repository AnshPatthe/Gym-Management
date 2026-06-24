import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Mail, ShieldCheck, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Simulate sending OTP
    setStep(2);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Simulate verifying OTP
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Simulate resetting password
    navigate('/login');
  };

  const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gym-black">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/80 to-gym-black/40 z-0"></div>
      </div>

      <div className="w-full max-w-md z-10 p-8 sm:p-10 glass-card mx-4 relative overflow-hidden">
        
        {step > 1 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="absolute top-6 left-6 text-gym-lightgray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        <div className="flex flex-col items-center mb-8">
          <div className="bg-gym-red p-3 rounded-full mb-4 shadow-lg shadow-gym-red/20">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {step === 1 && "Recover Password"}
            {step === 2 && "Enter Verification Code"}
            {step === 3 && "Create New Password"}
          </h2>
          <p className="text-gym-lightgray mt-2 text-center text-sm">
            {step === 1 && "Enter your email address and we'll send you a link to reset your password."}
            {step === 2 && `We've sent a 6-digit code to ${email || 'your email'}.`}
            {step === 3 && "Enter your new password below to regain access to your account."}
          </p>
        </div>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form 
                key="step1"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                onSubmit={handleSendOTP} 
                className="space-y-6 absolute w-full"
              >
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gym-lightgray block">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gym-lightgray" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field pl-10"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary flex justify-center py-3 items-center gap-2">
                  Send Code <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                key="step2"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                onSubmit={handleVerifyOTP} 
                className="space-y-6 absolute w-full"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gym-lightgray block text-center">Enter 6-digit code</label>
                  <div className="flex justify-between gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center text-xl font-bold bg-gym-black/50 border border-gym-gray rounded-lg text-white focus:border-gym-red focus:ring-1 focus:ring-gym-red transition-all duration-300"
                        value={digit}
                        onChange={(e) => {
                          const newOtp = [...otp];
                          newOtp[index] = e.target.value;
                          setOtp(newOtp);
                          // Auto focus next input logic would go here
                        }}
                      />
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary flex justify-center py-3 items-center gap-2">
                  Verify Code <ShieldCheck className="w-4 h-4" />
                </button>
              </motion.form>
            )}

            {step === 3 && (
              <motion.form 
                key="step3"
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                onSubmit={handleResetPassword} 
                className="space-y-6 absolute w-full"
              >
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gym-lightgray block">New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gym-lightgray" />
                    </div>
                    <input
                      type="password"
                      required
                      className="input-field pl-10"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gym-lightgray block">Confirm New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gym-lightgray" />
                    </div>
                    <input
                      type="password"
                      required
                      className="input-field pl-10"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary flex justify-center py-3 items-center gap-2">
                  Reset Password
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {step === 1 && (
          <div className="mt-8 text-center text-sm border-t border-gym-gray pt-6">
            <Link to="/login" className="font-medium text-gym-lightgray hover:text-white transition-colors">
              Return to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
