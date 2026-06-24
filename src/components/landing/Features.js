import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCircle, CalendarCheck, Activity, Utensils, CreditCard, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Membership Management",
    description: "Easily manage member profiles, renewals, and track membership status in real-time."
  },
  {
    icon: <UserCircle className="w-8 h-8" />,
    title: "Trainer Management",
    description: "Assign trainers, manage schedules, and track trainer performance effortlessly."
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Attendance Tracking",
    description: "QR code based check-ins and comprehensive attendance history for all members."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Workout Plans",
    description: "Create and assign personalized weekly workout routines with exercise categories."
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Diet Plans",
    description: "Custom nutrition tracking and meal scheduling tailored to member goals."
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Management",
    description: "Automated billing, online payments, and instant invoice generation."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Progress Tracking",
    description: "Visual charts to track weight loss, muscle gain, and overall fitness milestones."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gym-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gym-red font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Everything you need to run your gym efficiently
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gym-lightgray text-lg"
          >
            Our comprehensive suite of tools helps you focus on what matters most: building a thriving fitness community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2"
            >
              <div className="bg-gym-gray w-16 h-16 rounded-2xl flex items-center justify-center text-gym-red group-hover:bg-gym-red group-hover:text-white transition-colors duration-300 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gym-lightgray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
