import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Basic",
    price: "29",
    duration: "month",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Free Wi-Fi",
      "1 Group class per month"
    ],
    recommended: false
  },
  {
    name: "Standard",
    price: "49",
    duration: "month",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "Access to sauna",
      "1 Personal training session"
    ],
    recommended: true
  },
  {
    name: "Premium",
    price: "79",
    duration: "month",
    features: [
      "All Standard features",
      "4 Personal training sessions",
      "Custom diet plan",
      "Guest passes (2/month)"
    ],
    recommended: false
  },
  {
    name: "Elite",
    price: "129",
    duration: "month",
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Weekly massage therapy",
      "VIP Lounge access"
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gym-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gym-red font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Membership Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Choose the right plan for you
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card relative flex flex-col ${plan.recommended ? 'border-gym-red shadow-lg shadow-gym-red/20 scale-105 z-10' : 'border-gym-gray'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gym-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gym-lightgray ml-2">/{plan.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gym-lightgray">
                      <Check className="w-5 h-5 text-gym-red mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <Link to="/register" className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-colors ${plan.recommended ? 'bg-gym-red hover:bg-gym-darkred text-white' : 'bg-gym-gray hover:bg-gym-black text-white border border-gym-lightgray/20'}`}>
                  Join Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
